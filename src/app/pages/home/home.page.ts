import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: Movie[] = [];

  constructor() {}

  ngOnInit() {}
}
