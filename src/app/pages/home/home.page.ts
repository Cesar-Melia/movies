import { Component, OnInit, ViewChild } from '@angular/core';

import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/interfaces/Movie';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  movies: Movie[];
  movieQuery: string;
  searching: boolean;
  scrollDisabled: boolean;
  currentPage: number;
  totalPages: number;

  constructor(private moviesService: MoviesService) {
    this.movies = [];
  }

  ngOnInit() {
    // this.resetValues();
  }

  searchMovies(query: string, page: number = 1): void {
    this.moviesService.getMovies(query, page).subscribe((data) => {
      this.movies.push(...data.results);
      this.currentPage = data.page;
      this.totalPages = data.total_pages;
      this.searching = false;
    });
  }

  handleChange(event: CustomEvent): void {
    this.movieQuery = event.detail.value;
    this.resetValues();

    if (this.movieQuery !== '') {
      this.searchMovies(this.movieQuery);
      this.searching = true;
      this.scrollDisabled = false;
    }
  }

  handleScroll(): void {
    if (this.currentPage < this.totalPages) {
      this.searchMovies(this.movieQuery, ++this.currentPage);
      this.infiniteScroll.complete();
    }
  }

  resetValues(): void {
    this.movies = [];
    this.currentPage = 0;
    this.totalPages = 0;
    this.scrollDisabled = true;
  }
}
