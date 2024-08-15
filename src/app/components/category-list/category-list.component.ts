import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.loadParentCategories();

  }


  loadParentCategories(): void {
    this.categoryService.getParentCategories().subscribe((data) => {
      this.categories = data.map(category => ({ ...category, children: [], childrenLoaded: false }));
    }

    );
  }


  toggleChildren(category: Category): void {
    if (category.children && category.children.length > 0) {
      // Collapse the children if they are already loaded
      category.children = [];
      category.childrenLoaded = false;

    } else {
      // Fetch the children categories from the API
      this.categoryService.getCategoriesByParentId(category.id).subscribe(
        data => {
          category.children = data;  // Directly assign the list of children
          category.childrenLoaded = true;

          console.log('Fetched children:', category.children);  
        },
        error => {
          console.error('Error fetching children categories:', error);
        }
      );
    }
  }






}

// data is the result returned from the HTTP request made by the CategoryService