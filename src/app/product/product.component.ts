import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  category: string;
  images: string[];
  rating: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink, RouterModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  selectedPriceRange: string = '';
  showHighRating: boolean = false;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private proserv: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.error = null;
    this.proserv.getAllProducts().subscribe({
      next: (data) => {
        this.allProducts = data.products;
        this.filteredProducts = this.allProducts;
        this.extractCategories();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.error = 'Failed to load products. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  extractCategories(): void {
    this.categories = Array.from(new Set(this.allProducts.map(product => product.category)));
  }

  applyFilters(): void {
    this.filteredProducts = this.allProducts.filter(product => {
      let categoryMatch = !this.selectedCategory || product.category === this.selectedCategory;
      let priceMatch = true;
      if (this.selectedPriceRange === 'less1000') {
        priceMatch = product.price < 1000;
      } else if (this.selectedPriceRange === 'more1000') {
        priceMatch = product.price >= 1000;
      }
      let ratingMatch = !this.showHighRating || product.rating > 4.5;
      
      return categoryMatch && priceMatch && ratingMatch;
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onPriceRangeChange(priceRange: string): void {
    this.selectedPriceRange = priceRange;
    this.applyFilters();
  }

  onHighRatingChange(checked: boolean): void {
    this.showHighRating = checked;
    this.applyFilters();
  }

  stars = [1, 2, 3, 4, 5];
}