import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookRepository } from '../models/book.repository';
import { AlertifyService } from '../services/alertify.services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  title:string="Bibliotheca"
  books:Book[];
  bookRepository: BookRepository;

  filterText = "";

  constructor(private alertify: AlertifyService){
    this.bookRepository = new BookRepository();
    this.books = this.bookRepository.getBooks();
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
