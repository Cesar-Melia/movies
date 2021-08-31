import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/Movie';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService
      .getMovies('el señor de los anillos')
      .subscribe(console.log);
  }
}
