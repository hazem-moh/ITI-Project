import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-detail/product-details.component'; 
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component'; // Make sure the file path is correct and the component file exists in the specified location
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './components/search/search.component';
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
    { path: 'category/:id', component: CategoryListComponent },
    { path: 'category/:name', component: CategoryListComponent},
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }