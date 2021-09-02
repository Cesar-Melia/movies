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
    });
  }

  showText(): void {
    this.textSize = 5000;
  }
}
