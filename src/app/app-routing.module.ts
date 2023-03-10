import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowComponent } from './pages/tvshow/tvshow.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: 'genres',
    component: GenresComponent,
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent,
  },
  {
    path: 'tvshows',
    component: TvShowsComponent,
  },
  {
    path: 'tvshow/:id',
    component: TvShowComponent,
  },
  {
    path: 'tvshows/genres/:genreId',
    component: TvShowsComponent,
  },
  {
    // add this at the end of all routes
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
