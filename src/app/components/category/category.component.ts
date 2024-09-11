import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf
import { RouterModule } from '@angular/router'; // Required for [routerLink]

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'], // Fixed styleUrls typo
  imports: [CommonModule, RouterModule] // Ensure necessary modules are imported for standalone component
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data.categories;  // Assuming data is an array of categories
        console.log('Categories fetched successfully', this.categories);
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }
}
