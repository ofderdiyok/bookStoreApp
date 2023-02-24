import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Category[];
  categoryRepository: CategoryRepository;
  selectedCategory: any = null;

  displayAll = true;

  selectCategory(item?: Category){
    if(item){
      this.selectedCategory = item;
      console.log(this.selectedCategory);
      this.displayAll = false;
    }else{
      this.selectedCategory = item;
      this.displayAll = true;
    }
  }

  constructor(){
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }
}
