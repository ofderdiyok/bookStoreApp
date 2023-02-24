import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookRepository } from '../models/book.repository';

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

  constructor(){
    this.bookRepository = new BookRepository();
    this.books = this.bookRepository.getBooks();
  }

  addToList($event: any, book: Book){
    
    if($event.target.classList.contains('fa-heart')){
      $event.target.classList.remove('fa-heart');
      $event.target.classList.add('fa-trash');
      $event.target.innerText = " Remove"
    }else {
      $event.target.classList.add('fa-heart');
      $event.target.classList.remove('fa-trash');
      $event.target.innerText = " Add"
    }
  }
}
