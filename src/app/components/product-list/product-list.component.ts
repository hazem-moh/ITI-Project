import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  // تعريف الخاصية products
  products: any[] = []; // يمكنك ضبط النوع حسب البيانات التي تتعامل معها

  constructor() { }

  ngOnInit(): void {
    // هنا يمكنك تحميل البيانات إذا كانت تأتي من خدمة
    this.products = [
      { id: 1, name: 'Product 1', price: 29.99 },
      { id: 2, name: 'Product 2', price: 49.99 },
      { id: 3, name: 'Product 3', price: 19.99 }
    ];
  }

}