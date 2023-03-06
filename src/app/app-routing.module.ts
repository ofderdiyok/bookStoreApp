import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: 'home', component: BooksComponent},
  { path: 'books', component: BooksComponent},
  { path: 'books/create', component: CreateBookComponent},
  { path: 'books/category/:categoryId', component: BooksComponent},
  { path: 'books/:bookId', component: BookDetailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }
