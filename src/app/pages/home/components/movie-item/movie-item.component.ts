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

  /** This function links to the detail page by passing the id of the movie as a parameter.
   *
   * @param id - string - Movie id.
   */
  showDetail() {
    this.router.navigate(['/detail', this.movie.id]);
  }
}
