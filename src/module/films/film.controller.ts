import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

// services
import { FilmService } from './film.service';

// DTOs
import { CreateFilmDto, UpdateFilmDto } from './dto';

// interfaces
import { Film } from './interface';

// db
import { FilmClass } from 'src/schemas/Film';

@Controller('/users')
export class FilmControler {
  constructor(private films: FilmService) {}

  @Post()
  async createOne(
    @Res() res: Response<any>,
    @Body() createFilmDto: CreateFilmDto,
  ): Promise<Response<FilmClass>> {
    const response = await this.films.createOne(createFilmDto);
    return res.status(200).json(response);
  }

  @Get()
  async getAll(@Res() res: Response<Film[]>): Promise<Response<Film[]>> {
    const response = await this.films.getAll();
    return res.status(200).json(response);
  }

  @Get(':id')
  async getOne(
    @Res() res: Response<Film>,
    @Param('id') id: string,
  ): Promise<Response<Film>> {
    const response = await this.films.getOne(id);
    return res.status(200).json(response);
  }

  @Patch(':id')
  async updateOne(
    @Res() res: Response<any>,
    @Param('id') id: string,
    @Body() updateFilmDto: UpdateFilmDto,
  ): Promise<any> {
    const response = await this.films.updateOne(id, updateFilmDto);
    return res.status(200).json(response);
  }

  @Delete(':id')
  async deleteOne(
    @Res() res: Response<any>,
    @Param('id') id: string,
  ): Promise<any> {
    const response = await this.films.deleteOne(id);
    return res.status(200).json(response);
  }
}
