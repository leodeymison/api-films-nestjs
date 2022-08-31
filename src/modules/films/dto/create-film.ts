import { CreateFilm } from '../interface';
import { IsString, IsNumber, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateFilmDto implements CreateFilm {
  // Título
  @IsNotEmpty({
    message: 'Campo título é obrigatório',
  })
  @IsString({
    message: 'Campo title é um texto',
  })
  @MaxLength(255, {
    message: 'Campo title deve ter no máximo 255',
  })
  title: string;

  // Imagem
  @IsNotEmpty({
    message: 'Campo imagem é obrigatório',
  })
  @IsString({
    message: 'Campo imagem é um texto',
  })
  image: string;

  // Banner
  @IsNotEmpty({
    message: 'Campo banner é obrigatório',
  })
  @IsString({
    message: 'Campo banner é um texto',
  })
  movie_banner: string;

  // Descrição
  @IsNotEmpty({
    message: 'Campo descrição é obrigatório',
  })
  @IsString({
    message: 'Campo descrição é um texto',
  })
  @MaxLength(1000, {
    message: 'Campo descrição deve ter no máximo 1000',
  })
  description: string;

  // Diretor
  @IsNotEmpty({
    message: 'Campo diretor é obrigatório',
  })
  @IsString({
    message: 'Campo diretor é um texto',
  })
  director: string;

  // Produtor
  @IsNotEmpty({
    message: 'Campo producer é obrigatório',
  })
  @IsString({
    message: 'Campo producer é um texto',
  })
  producer: string;

  // Data de lançamento
  @IsNotEmpty({
    message: 'Campo data de lançamento é obrigatório',
  })
  @IsNumber(
    { maxDecimalPlaces: 4 },
    {
      message: 'Campo data de lançamento é um texto',
    },
  )
  release_date: number;
}
