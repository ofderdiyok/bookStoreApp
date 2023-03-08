import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  model : any = {
    categoryId : ""
  };

  bookForm = new FormGroup({
    title : new FormControl("", [Validators.required, Validators.minLength(4)]),
    author : new FormControl("", [Validators.required, Validators.minLength(8)]),
    description : new FormControl("", [Validators.required, Validators.minLength(20)]),
    imageUrl : new FormControl("", [Validators.required]),
    categoryId : new FormControl("", [Validators.required]),
  })

  ngOnInit(): void{
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createBook(){

    console.log(this.model);

    const tempBook :Book = {
       id : 0,
       title: this.model.title,
       author: this.model.author,
       imageUrl: this.model.imageUrl,
       description: this.model.description,
       isPopular: false,
       categoryId : this.model.categoryId
     }

    this.bookService.createBook(tempBook).subscribe(data => 
        this.router.navigate(['books', data.id])
      );

    this.alertify.success(this.model.title + " added.")

    
  }

  log(value: any){
    console.log(value);
  }
}
