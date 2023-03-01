import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'home', component: BooksComponent},
  { path: 'books', component: BooksComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'books/category/:categoryId', component: BooksComponent},
  { path: 'books/:bookId', component: BookDetailComponent}
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }
