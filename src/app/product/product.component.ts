import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'; 
import { NgClass, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,NgClass,RouterLink,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  allProducts!:any;

  constructor(private proserv:ProductService){}


  ngOnInit(): void {
          this.proserv.getAllProducts().subscribe((data)=>{
            this.allProducts=data
          })

  }
  

  rating = 3; // Default rating
  hoverRating = 0; // Rating during hover
  stars = [1, 2, 3, 4, 5]; // Number of stars

}
