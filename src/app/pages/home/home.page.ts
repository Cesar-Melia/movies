import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IonInfiniteScroll } from '@ionic/angular';

import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/interfaces/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnDestroy {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  apiSub: Subscription;
  movies: Movie[];
  movieQuery: string;
  searching: boolean;
  scrollDisabled: boolean;
  currentPage: number;
  totalPages: number;

  constructor(private moviesService: MoviesService) {
    this.movies = [];
  }

  ngOnDestroy(): void {
    this.apiSub.unsubscribe();
  }

  searchMovies(query: string, page: number = 1): void {
    this.apiSub = this.moviesService.getMovies(query, page).subscribe((res) => {
      this.movies.push(...res.results);
      this.currentPage = res.page;
      this.totalPages = res.total_pages;
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
      return;
    }

    this.scrollDisabled = true;
  }

  resetValues(): void {
    this.movies = [];
    this.currentPage = 0;
    this.totalPages = 0;
  }
}
