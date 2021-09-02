import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieDetail } from '../../shared/interfaces/MovieDetail';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  routeSub: Subscription;
  apiSub: Subscription;
  id: string;
  movie: MovieDetail;
  date: string;
  textSize: number;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.textSize = 200;
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params: Params) => {
      this.id = params.get('movieId');
    });

    this.searchMovieDetail(this.id);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.apiSub.unsubscribe();
  }

  searchMovieDetail(id: string): void {
    this.apiSub = this.moviesService.getMovieDetail(id).subscribe((data) => {
      this.movie = data;

      this.date = this.formatDate(this.movie.release_date);
    });
  }

  formatDate(date: string): string {
    const months = {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre',
    };
    const dateValues: string[] = date.split('-');
    const month = Number(dateValues[1]);
    const year = dateValues[0];

    return `${months[month]} ${year}`;
  }

  showText(): void {
    this.textSize = 5000;
  }
}
