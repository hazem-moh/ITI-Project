import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { HSliderComponent } from '../h-slider/h-slider.component';
import { Slider2Component } from '../slider2/slider2.component';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Slider2Component,SearchComponent,HSliderComponent,RouterModule, CommonModule, ImageSliderComponent],
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
        url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705942851-screenshot-2024-01-22-at-11-59-00-am-65ae9edd3be2a.png?crop=0.941xw:0.972xh;0.0465xw,0.0281xh&resize=980:*', RouterLink:"['/blender/:16']"
      },
      {
        url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700066963-screen-shot-2023-11-15-at-11-48-54-am-6554f684b9e81.png?crop=1.00xw:0.818xh;0,0.182xh&resize=980:*', link:'/:5'
      },
      {
        url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1719428078-italia-reed-diffuser-brooklyn-candle-studio-396153.jpg?crop=1.00xw:0.801xh;0,0.116xh&resize=980:*', link:'/:3'
      },
      {
        url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700152147-image.jpg?crop=0.609xw:0.812xh;0.189xw,0.130xh&resize=980:*', link:'/:16'
      },
      {
        url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1701873972-image.jpg?crop=0.998xw:1xh;center,top&resize=980:*', link:'/:12'
      },
    ];
  }
  