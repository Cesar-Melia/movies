import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../../../../shared/interfaces/Movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private router: Router) {}

  ngOnInit() {}

  async showDetail(id: string) {
    this.router.navigate(['/detail', this.movie.id]);
  }
}
