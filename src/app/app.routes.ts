import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-detail/product-details.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    {path:'productdetails/:id',component:ProductDetailsComponent},
    {path:'product',component:ProductComponent},
    {path:'search',component:SearchComponent},
    { path: 'login', component: LoginComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }