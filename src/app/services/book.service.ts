import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "../models/book";
import { Observable, map, tap, throwError, catchError } from "rxjs";

@Injectable()
export class BookService{
    url = "http://localhost:3000/books";

    constructor(private http: HttpClient){}

    getBooks(categoryId: number): Observable<Book[]>{
        let newUrl = this.url;

        if(categoryId){
            newUrl += '?categoryId=' + categoryId;
        }
        return this.http.get<Book[]>(newUrl);
    }

    getBookById(bookId: number): Observable<Book>{
        let newUrl = this.url + '/' + bookId;
        return this.http.get<Book>(newUrl);
    }

    getPopularBooks(): Observable<Book[]>{

        return this.http.get<Book[]>(this.url).pipe(
            map(results => results.filter(r => r.isPopular==true))
        )
    }

    createBook(book: Book): Observable<Book>{
        return this.http.post<Book>(this.url, book).pipe(
            tap(data => console.log(data)),
            
        )
    }

    handleError(error:any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
    
}