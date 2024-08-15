import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  constructor(private categoryService:CategoryService){}
  
    @Input() categories: Category[] = [];
  

    toggleChildren(category: Category): void {
      if (category.childrenLoaded) {
        // Collapse the children if they are already loaded
        category.children = [];
        category.childrenLoaded = false;
      } else {
        // Fetch the children categories from the API
        this.categoryService.getCategoriesByParentId(category.id).subscribe(
          data => {
            category.children = data;
            category.childrenLoaded = true;
          },
          error => {
            console.error('Error fetching children categories:', error);
          }
        );
      }
    }
}