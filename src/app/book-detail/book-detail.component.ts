import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers : [BookService]
})
export class BookDetailComponent {
  book: Book;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getBookById(params["bookId"]).subscribe(data =>{
        this.book = data;
      })
    })
  }

}
