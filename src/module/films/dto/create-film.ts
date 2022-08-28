import { CreateFilm } from '../interface';

export class CreateFilmDto implements CreateFilm {
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
}
