import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieVideo,
} from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: MovieDto | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }

  ngOnDestroy(): void {
    console.log('compoenet destroy');
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  getSimilarMovies(id: string) {
    this.movieService.getSimilarMovies(id).subscribe((movie) => {
      this.similarMovies = movie;
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe((movieVideos) => {
      this.movieVideos = movieVideos;
    });
  }
  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((movieImages) => {
      this.movieImages = movieImages;
    });
  }

  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe((credits) => {
      this.movieCredits = credits;
    });
  }
}
