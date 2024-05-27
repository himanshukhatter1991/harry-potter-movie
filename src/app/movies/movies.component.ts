import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../shared/interface/movie.interface';
import { MoviesService } from '../shared/service/movies.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FilterPipe } from '../shared/pipe/filter/filter.pipe';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule, FilterPipe, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  service = inject(MoviesService);

  movies: Movie[] = [];
  movieTitle: string = '';
  releaseYear!: number;

  ngOnInit(): void {
    this.service.getMovies().subscribe((response: Movie[]) => {
      this.movies = response;
    });
  }
}
