import { Injectable } from '@nestjs/common';

// DTOs
import { CreateFilmDto, UpdateFilmDto } from './dto';

// interfaces
import { Film } from './interface';
import { DeleteType } from '../../interfaces/https-response';

// db
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FilmClass, FilmDocument } from '../../schemas/Film';

@Injectable()
export class FilmService {
  constructor(
    @InjectModel(FilmClass.name) private FilmModel: Model<FilmDocument>,
  ) {}

  async getAll(): Promise<Film[]> {
    const getFilms = await this.FilmModel.find<Film>();
    return getFilms;
  }

  async createOne(body: CreateFilmDto): Promise<FilmClass> {
    const createFilm = new this.FilmModel(body);
    const save = await createFilm.save();
    return save;
  }

  async getOne(id: string): Promise<Film> {
    const getFilm = await this.FilmModel.findOne<Film>({ id });
    return getFilm;
  }

  async updateOne(id: string, body: UpdateFilmDto): Promise<FilmClass> {
    const updateFilm = await this.FilmModel.findByIdAndUpdate(id, body);
    return updateFilm;
  }

  async deleteOne(id: string): Promise<DeleteType> {
    const DeleteFilm = await this.FilmModel.deleteOne({ id });
    return DeleteFilm;
  }
}
