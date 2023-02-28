import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers : [CategoryService]
})
export class CategoryComponent {
  categories: Category[] = [];
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

  constructor(private categoryService: CategoryService){
    
  }

  ngOnInit(): void{
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    }, error => console.log(error))
  }
}
