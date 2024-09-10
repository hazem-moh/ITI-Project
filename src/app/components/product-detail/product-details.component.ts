import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';  
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  prodData:any;
  id!:number;

constructor(@Inject(ProductService) private prodserv:ProductService,private route:ActivatedRoute){

}
ngOnInit(): void {
  this.id=Number(this.route.snapshot.paramMap.get("id"))
this.prodserv.getProductByID(this.id).subscribe((data: any) => {
  this.prodData = data;
});
}

rating = 3; // Default rating
hoverRating = 0; // Rating during hover
stars = [1, 2, 3, 4, 5]; // Number of stars
}
