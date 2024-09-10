import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service.ts.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {
  categoryId: string | null = null;
  products: any[] = []; // Adjust the type according to your product model

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      this.loadProducts();
    });
  }

  loadProducts(): void {
    if (this.categoryId) {
      this.productService.getProductsByCategory(this.categoryId).subscribe(data => {
        this.products = data;
      });
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

