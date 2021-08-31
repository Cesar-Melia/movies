import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/Movie';
import { MoviesService } from '../../shared/services/movies.service';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: Movie[] = [];
  movieQuery: string;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.searchMovies(this.movieQuery);
  }

  searchMovies(query: string): void {
    this.moviesService
      .getMovies('el señor de los anillos')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
