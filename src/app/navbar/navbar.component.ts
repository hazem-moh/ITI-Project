import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    isCartClicked = false;
  
    constructor(private router: Router) {}
  
    goToCheckout(event: Event) {
      event.preventDefault();
      this.isCartClicked = true;
      setTimeout(() => {
        this.isCartClicked = false;
      }, 200); // تغيير اللون يعود بعد 200ms
      this.router.navigate(['/checkout']);

    }
    changeBagColor() {
      const shoppingBag = document.querySelector('.shopping-bag');
      shoppingBag?.classList.toggle('clicked');
    }
  
    users: Product[] = [
      // Add more users as needed
    ];
  
    filteredProduct: Product[] = this.users;
  
    searchtitle: string = '';
  
    searchProduct() {
      if (this.searchtitle) {
        this.filteredProduct = this.users.filter(user =>
          user.title.toLowerCase().includes(this.searchtitle.toLowerCase())
        );
      } else {
        this.filteredProduct= this.users;
      }
    }
    isMenuOpen = false;

    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
