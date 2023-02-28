import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent,
    CategoryComponent,
    BookFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
