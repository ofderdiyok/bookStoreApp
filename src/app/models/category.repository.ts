import { Category } from "./category";

export class CategoryRepository{
    private categories: Category[];

    constructor(){
        this.categories = [
            {id:1, cName:"Classics"},
            {id:2, cName:"Crime"},
            {id:3, cName:"Historical"},
            {id:4, cName:"Horror"},
        
          ]
    }

    getCategories():Category[]{
        return this.categories;
    }

    getCategoriesById(id:number):Category | undefined{
        return this.categories.find(i=>i.id==id);
    }
}