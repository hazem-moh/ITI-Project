import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Cart } from '../cart.model';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };  // تأكد من أن items هي مصفوفة فارغة في البداية

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(data => {
      this.cart = data;
    });
  }

  updateQuantity(productId: string, quantity: number) {
    this.cartService.updateCart({ productId, quantity }).subscribe(() => {
      this.loadCart();
    });
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId).subscribe(() => {
      this.loadCart();
    });
  }
}