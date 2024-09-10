import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { RouterModule, Routes } from '@angular/router'; // تأكد من استيراد RouterModule
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { Product } from './models/product.model';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent,CartComponent,
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    ImageSliderComponent,
    IonicModule,NavbarComponent,RouterModule,RegisterComponent,LoginComponent,PaymentComponent,ProductListComponent,HomeComponent,ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
//   slides: any[] = [
//     {
//       url: '/assets/images/image1.avif',
//       title: 'First slide',
//       description: 'This is the first slide',
//     },
//     {
//       url: '/assets/images/image2.avif',
//       title: 'Second slide',
//       description: 'This is the second slide',
//     },
//     {
//       url: '/assets/images/image3.avif',
//       title: 'Third slide',
//       description: 'This is the third slide',
//     },
//     {
//       url: '/assets/images/image4.avif',
//       title: 'Fourth slide',
//       description: 'This is the fourth slide',
//     },
//     {
//       url: '/assets/images/image5.avif',
//       title: 'Fifth slide',
//       description: 'This is the fifth slide',
//     },
//  ];
}
