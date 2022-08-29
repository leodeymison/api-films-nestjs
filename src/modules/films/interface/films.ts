export interface Film {
  _id: string;
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateFilm {
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
}

export interface UpdateFilm {
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
}
