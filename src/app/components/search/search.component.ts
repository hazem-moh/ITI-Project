import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchResult!: any[];
  private searchVal!: string;
  constructor(private movServ: MovieService) {}
  ngOnInit(): void {
    this.getSearchedMovie('')
  }

  set searchValue(val: string) {
    this.searchVal = val;
    this.getSearchedMovie(this.searchVal)
  }

  getSearchedMovie(name: string) {
    this.movServ.searchByMovieName(name).subscribe((data) => {
      this.searchResult=data.results
      console.log(data.results);
      
    });
  }
}
