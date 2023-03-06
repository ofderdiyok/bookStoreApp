import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'create-book',
  templateUrl: './create-book.component.html',
  providers: [CategoryService, BookService]
})
export class CreateBookComponent {
  constructor(private categoryService: CategoryService, 
              private bookService: BookService, 
              private alertify: AlertifyService,
              private router: Router){}

  categories : Category[] = [];

  ngOnInit(): void{
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createBook(title: any, author: any, description: any, imageUrl: any, categoryid: any){
     const tempBook :Book = {
       id : 0,
       title: title.value,
       author: author.value,
       imgUrl: imageUrl.value,
       description: description.value,
       isPopular: false,
       categoryId : categoryid.value
     }

    this.bookService.createBook(tempBook).subscribe(data => 
        this.router.navigate(['books', data.id])
      );

    this.alertify.success(title.value + " added.")

    
  }
}
