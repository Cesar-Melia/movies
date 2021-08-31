import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieDetail } from '../../shared/interfaces/MovieDetail';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: string;
  movie: MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.id = params.get('movieId');
    });

    this.searchMovieDetail(this.id);
  }

  searchMovieDetail(id: string): void {
    this.moviesService.getMovieDetail(id).subscribe((data) => {
      this.movie = data;
      console.log(this.movie); /////////////////////////////////Delete
    });
  }
}
