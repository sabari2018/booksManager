import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookModel} from '../models/Book.model';
import {Subscription} from 'rxjs/Subscription';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: BookModel[];
  booksSubscription: Subscription;
  constructor(private booksService: BooksService,
              private router: Router) { }

  ngOnInit(){

    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: BookModel[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: BookModel){
    this.booksService.removeBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books', id]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
