import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], filterText: string): Book[] {
    filterText = filterText.toLowerCase();
    
    return filterText? books.filter((b:Book) => (
      (b.title.toLowerCase().indexOf(filterText) !== -1) ||
      b.author.toLowerCase().indexOf(filterText)) !== -1): books;
  }

}
