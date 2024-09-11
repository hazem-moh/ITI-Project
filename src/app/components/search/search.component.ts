import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  category: string;
  images : string[];
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchResult: Product[] = [];
  allProducts: Product[] = [];
  searchValue: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.allProducts = data.products;
        console.log('Products fetched successfully', this.allProducts);
      },
      error: (error) => {
        console.error('Error fetching products', error);
      }
    });
  }

  searchProducts(): void {
    if (this.searchValue.trim() === '') {
      this.searchResult = [];
      return;
    }

    this.searchResult = this.allProducts.filter(product =>
      product.title.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}