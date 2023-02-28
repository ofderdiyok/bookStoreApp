import { Component } from '@angular/core';
import { Book } from '../models/book';
import { AlertifyService } from '../services/alertify.service';
import { BookService } from '../services/book.service';

import { from, pipe } from 'rxjs';
import { filter, flatMap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers : [BookService],
})
export class BooksComponent {
  title:string="Bibliotheca"
  books:Book[] = [];
  popularBooks: Book[] = [];

  filterText = "";

  constructor(private alertify: AlertifyService, private bookService: BookService){}

  ngOnInit() : void{
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

    this.bookService.getPopularBooks().subscribe(data =>{
      this.popularBooks = data;
    })
  }

  addToList($event: any, book: Book){

    if($event.target.classList.contains('fa-heart')){
      $event.target.classList.remove('fa-heart');
      $event.target.classList.add('fa-trash');
      $event.target.innerText = " Remove";
      this.alertify.success(book.title + " added to your list.");
    }else {
      $event.target.classList.add('fa-heart');
      $event.target.classList.remove('fa-trash');
      $event.target.innerText = " Add";
      this.alertify.error(book.title + " removed from your list.");
    }
  }
}
