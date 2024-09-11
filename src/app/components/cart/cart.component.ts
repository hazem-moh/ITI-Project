import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: any = {
    products: [],
    subTotal: 0,
  };
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  async loadCart() {
    try {
      const response = await lastValueFrom(this.cartService.getCartItems());
      this.cart = response.cart;
    } catch (error) {
      console.error('Error loading cart:', error);
      // Handle the error appropriately here
    }
  }

  increaseQuantity(product: any) {
    this.cartService
      .updateCartItem(product.productId, product.quantity + 1)
      .subscribe(() => {
        this.loadCart();
      });
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      this.cartService
        .updateCartItem(product.productId, product.quantity - 1)
        .subscribe(() => {
          this.loadCart();
        });
    }
  }
  confirmDelete(productId: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.cartService.deleteCartItem(productId).subscribe(() => {
        this.loadCart(); // Reload cart after item is deleted
      });
    }
  }
  deleteItem(productId: string) {
    this.cartService.deleteCartItem(productId).subscribe(() => {
      this.loadCart();
    });
  }
}

