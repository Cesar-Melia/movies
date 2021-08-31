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
  date: string;

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

      this.date = this.formatDate(this.movie.release_date);
      console.log(this.movie); /////////////////////////////////Delete
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
    const newDate = `${months[Number(dateValues[1])]} ${dateValues[0]}`;

    return newDate;
  }
}
