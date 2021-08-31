import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Movie } from '../models/Movie';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<ApiResponse> {
    const queryUrl = `search/movie?api_key=c33d686c5bcc80aca5d02d7e38d82308&query=${query}&language=es`;

    return this.http.get<ApiResponse>(`${this.apiUrl}${queryUrl}`);
  }
}
