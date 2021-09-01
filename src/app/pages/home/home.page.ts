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

  ngOnInit() {}

  searchMovies(query: string): void {
    this.moviesService.getMovies(query).subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }

  handleChange(event: CustomEvent): void {
    console.log('Evento:', event);
    this.movieQuery = event.detail.value;

    if (this.movieQuery !== '') {
      this.searchMovies(this.movieQuery);
    }
  }
}
