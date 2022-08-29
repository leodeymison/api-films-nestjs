import { UpdateFilm } from '../interface';

export class UpdateFilmDto implements UpdateFilm {
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
}
