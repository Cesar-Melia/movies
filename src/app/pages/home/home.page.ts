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

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.searchMovies(this.movieQuery);
  }

  searchMovies(query: string): void {
    this.moviesService
      .getMovies('el señor de los anillos') //introduce query to params
      .subscribe((data) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  }
}
