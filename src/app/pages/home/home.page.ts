import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/interfaces/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: Movie[];
  movieQuery: string;
  searching: boolean;

  constructor(private moviesService: MoviesService) {
    this.searching = false;
    this.movies = [];
  }

  ngOnInit() {}

  searchMovies(query: string): void {
    this.moviesService.getMovies(query).subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
      this.searching = false;
    });
  }

  handleChange(event: CustomEvent): void {
    this.movieQuery = event.detail.value;
    this.movies = [];

    if (this.movieQuery !== '') {
      this.searching = true;
      this.searchMovies(this.movieQuery);
    }
  }
}
