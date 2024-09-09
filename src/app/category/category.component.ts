import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categorySlides = [
    // Define slides for your category slider here
  ];

  categories = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Description of Category 1',
      image: 'path/to/image1.jpg'
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Description of Category 2',
      image: 'path/to/image2.jpg'
    },
    // Add more categories as needed
  ];
}
