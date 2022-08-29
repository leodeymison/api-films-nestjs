import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// type
import { CreateFilm } from '../modules/films/interface';

export type FilmDocument = FilmClass & Document;

@Schema({ timestamps: true })
export class FilmClass {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  movie_banner: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  director: string;
  @Prop({ required: true })
  producer: string;
  @Prop({ required: true })
  release_date: number;
}

export const FilmSchema = SchemaFactory.createForClass<CreateFilm>(FilmClass);
