import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie , MovieDetail} from '../interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies');
  }

  getMovieDetail(movieId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`/movies/${movieId}`);
  }
}

