import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/:movieId', loadComponent: () => import('./movies/movie-details/movie-details.component').then(c => c.MovieDetailsComponent) },
    { path: '**', loadComponent: ()=> import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) }
];
