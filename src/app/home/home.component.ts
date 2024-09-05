import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { HSliderComponent } from '../h-slider/h-slider.component';
import { Slider2Component } from '../slider2/slider2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Slider2Component,HSliderComponent,RouterModule, CommonModule, ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  products: any[] = [
    {
      string:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRarjEad6CDIB9X4WnprrrROiLnX8xgOtGA&s',

    },
    {
      string:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRarjEad6CDIB9X4WnprrrROiLnX8xgOtGA&s',

    },
    {
      string:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRarjEad6CDIB9X4WnprrrROiLnX8xgOtGA&s',

    }

  ];
    slides: any[] = [
      {
        url: '/assets/images/image1.avif',
        title: 'First slide',
        description: 'This is the first slide',
      },
      {
        url: '/assets/images/image2.avif',
        title: 'Second slide',
        description: 'This is the second slide',
      },
      {
        url: '/assets/images/image3.avif',
        title: 'Third slide',
        description: 'This is the third slide',
      },
      {
        url: '/assets/images/image4.avif',
        title: 'Fourth slide',
        description: 'This is the fourth slide',
      },
      {
        url: '/assets/images/image5.avif',
        title: 'Fifth slide',
        description: 'This is the fifth slide',
      },
    ];
  }
  