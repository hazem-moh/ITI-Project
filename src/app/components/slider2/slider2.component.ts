import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider2.component.html',
  styleUrl: './slider2.component.scss'
})
export class Slider2Component {
  cards = [
    { title: 'Lavender Fragrance Diffuser', imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700087564-screen-shot-2023-11-15-at-5-32-20-pm-655546fe8b005.png?crop=0.984725050916497xw:1xh;center,top&resize=500:*', link: '/' },
    { title: 'Organic Cotton Pillow', imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1706557520-img-4417-65b80026b9ef2.jpg?crop=1xw:1xh;center,top&resize=980:*', link: '/gifts/men' },
    { title: 'Single-Serve Coffeemaker', imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1665593999-41na-WjfYIL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*', link: '/gifts/kids' },
    { title: 'Magic Bullet Blender', imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1601057655-41MUBAPIW7L.jpg?crop=1xw:1.00xh;center,top&resize=980:*', link: '/blender/:9' },
    { title: 'Robot Self-Empty Vacuum', imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1718971676-41Q6J-g5KoL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*', link: '/stick/:9' },
    { title: 'Saatva Classic Mattress', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/saatva-1582825208.jpg?crop=1.00xw:0.997xh;0,0&resize=360:*', link: '/mattress/:9' },
    { title: 'Gaming Keyboard', imageUrl: 'https://i5.walmartimages.com/seo/SteelSeries-Apex-9-Mini-60-Wired-OptiPoint-Adjustable-Actuation-Switch-Gaming-Keyboard-with-RGB-Lighting-Black_ffc8afc1-75c2-4729-a6df-a85317c48086.6af3be98478f401d40cd0119c2de69b3.jpeg', link: '/gifts/books' },
    { title: 'Food Preservation System', imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1627052714-31JxoR2hSIL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*', link: '/eMachine/:4' }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
}
