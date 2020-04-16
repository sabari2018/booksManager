import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../models/Book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: BookModel;
  constructor(private activatedRoute: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.book = new BookModel('', '');
    const id = this.activatedRoute.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: BookModel) => {
        this.book = book;
      }
    );
  }

  onBack(){
    this.router.navigate(['/books']);
  }

}
