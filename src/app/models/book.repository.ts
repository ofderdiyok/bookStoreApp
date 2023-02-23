import { Book } from "./book";

export class BookRepository{
    private books: Book[];

    constructor(){
        this.books = [
            {id: 1, title:"1984", author:"George Orwell", imgUrl:"1.jpg" ,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis autem deleniti quam quo! At voluptates quis ut ratione quisquam. Quidem.", isPopular:true},
            {id: 2, title:"Uçurtma Avcısı", author:"Khaled Hosseni", imgUrl:"2.jpg", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis autem deleniti quam quo! At voluptates quis ut ratione quisquam. Quidem.", isPopular:false},
            {id: 3, title:"Yetişkinlerin Yalan Hayatı", author:"Elena Ferrante", imgUrl:"3.jpg", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis autem deleniti quam quo! At voluptates quis ut ratione quisquam. Quidem.", isPopular:true},
            {id: 4, title:"Bir Muhteşem Güneş", author:"Khaled Hosseni", imgUrl:"4.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis autem deleniti quam quo! At voluptates quis ut ratione quisquam. Quidem.", isPopular:true},
            {id: 5, title:"Saraydan Sürgüne", author:"Kenize Mourad", imgUrl:"5.jpg",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis autem deleniti quam quo! At voluptates quis ut ratione quisquam. Quidem.", isPopular:true}
          ]
    }

    getBooks(): Book[]{
        return this.books;
    }

    getPopularBooks(): Book[]{
        return this.books.filter(i=>i.isPopular);
    }

    getBookById(id: number): Book | undefined{
        return this.books.find(i=>i.id==id);
    }
}