import { Component, inject } from '@angular/core';
import { MoviesService } from '../../shared/service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from '../../shared/interface/movie.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ConvertMinHrPipe } from '../../shared/pipe/convert-min-hr/convert-min-hr.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [AsyncPipe, ConvertMinHrPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(MoviesService);

  movieId!: string;
  movieDetailsData$!: Observable<MovieDetail>;

  ngOnInit(): void {
   this.route.params.subscribe(params => {
      this.movieId = params['movieId'];
      this.movieDetailsData$ = this.service.getMovieDetail(this.movieId);
    });
  }

  back(): void {
    this.router.navigate(['/movies'])
  }
}
