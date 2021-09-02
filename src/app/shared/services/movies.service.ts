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

  /** This function makes a request to the API to get a list of movies that match the text passed by parameter.
   *
   * @param query - string - Text to compare with the title of the films.
   * @param page - number - Page requested from the API.
   * @returns - Observable<ApiResponse> - A list with a maximum of 20 films, the total number of pages and the current page.
   */
  getMovies(query: string, page: number): Observable<ApiResponse> {
    const url = `${this.API_URL}search/movie?api_key=${this.API_KEY}&query=${query}&language=es&page=${page}`;

    return this.http.get<ApiResponse>(url);
  }

  /** This function makes a request to the API to obtain the details of the film associated with the id.
   *
   * @param id - string - Movie id.
   * @returns - Observable<MovieDetail> - All the movie details.
   */
  getMovieDetail(id: string): Observable<MovieDetail> {
    const url = `${this.API_URL}movie/${id}?api_key=${this.API_KEY}&language=es`;

    return this.http.get<MovieDetail>(url);
  }
}
