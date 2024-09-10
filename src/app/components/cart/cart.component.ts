import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
      //console.log(data);
    });
  }

  removeCartItem(id: string) {
    this.cartService.deleteCartItem(id).subscribe(() => {
      this.loadCartItems();
    });
  }

  updateQuantity(id: string, newQuantity: number) {
    const updatedItem = this.cartItems.find(item => item._id === id);
    if (updatedItem) {
      updatedItem.quantity = newQuantity;
      this.cartService.updateCartItem(id, updatedItem).subscribe(() => {
        this.loadCartItems();
      });
    }
  }
}