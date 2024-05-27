import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../interface/movie.interface';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(movies: Movie[], movieTitle: string, movieYear: number): Movie[] {
    if (!movies) {
      return [];
    }
    if (!movieTitle && !movieYear) {
      return movies;
    }

    if (movieTitle) {
      movieTitle = movieTitle.toLocaleLowerCase();
      movies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(movieTitle));
    }
    return movieYear && movieYear.toString().length === 4
      ? movies.filter(movie => new Date(movie.release_date).getFullYear() === movieYear)
      : movies;

  }

}
