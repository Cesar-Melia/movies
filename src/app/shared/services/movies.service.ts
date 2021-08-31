import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ApiResponse } from '../interfaces/ApiResponse';
import { MovieDetail } from '../interfaces/MovieDetail';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  API_URL: string = environment.apiUrl;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  API_KEY: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<ApiResponse> {
    const url = `${this.API_URL}search/movie?api_key=${this.API_KEY}&query=${query}&language=es`;

    return this.http.get<ApiResponse>(url);
  }

  getMovieDetail(id: string): Observable<MovieDetail> {
    const url = `${this.API_URL}movie/${id}?api_key=${this.API_KEY}&language=es`;

    return this.http.get<MovieDetail>(url);
  }
}
