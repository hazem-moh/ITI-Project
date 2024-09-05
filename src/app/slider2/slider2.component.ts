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
    { title: 'Top Gifts For Women', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/' },
    { title: 'Top Gifts for Men', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/men' },
    { title: 'Top Gifts for Kids', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/kids' },
    { title: 'Top Gifts for Grandparents', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/grandparents' },
    { title: 'Top Gifts for Teens', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/teens' },
    { title: 'Green-Thumb Gifts', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/garden' },
    { title: 'Gifts For The Bookworms', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/books' },
    { title: 'Gifts For The Home Chefs', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0-sliHHq4F_XV00jsdkaf5dSZUgxMAMkTw&s', link: '/gifts/chefs' }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
}
