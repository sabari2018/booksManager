import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';
import {BookModel} from '../../models/Book.model';

@Component({
  selector: 'app-single-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  onSaVeBook(){
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const newBook = new BookModel(title, author);
    this.booksService.createBook(newBook);
    this.router.navigate(['/books']);
  }
}
