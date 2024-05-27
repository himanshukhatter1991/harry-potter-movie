import { Component, Input, inject } from '@angular/core';
import { Movie } from '../../shared/interface/movie.interface';
import { Router } from '@angular/router';
import { ConvertMinHrPipe } from '../../shared/pipe/convert-min-hr/convert-min-hr.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [ConvertMinHrPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  router = inject(Router);

  @Input() movie!: Movie;

  onMovieSelection(id: string): void {
    this.router.navigate(['/movies', id]);
  }
}
