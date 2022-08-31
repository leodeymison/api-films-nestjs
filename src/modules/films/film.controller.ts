import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
import { DeleteType } from '../../interfaces/https-response';

// db
import { FilmClass } from '../../schemas/Film';
import { JoiValidationPipe } from '../../utils/joiValidationPipe';

@Controller('/films')
export class FilmControler {
  constructor(private films: FilmService) {}

  @Post()
  async createOne(
    @Res() res: Response<any>,
    @Body(new JoiValidationPipe()) createFilmDto: CreateFilmDto,
  ): Promise<Response<FilmClass>> {
    try {
      const response = await this.films.createOne(createFilmDto);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async getAll(@Res() res: Response<Film[]>): Promise<Response<Film[]>> {
    try {
      const response = await this.films.getAll();
      return res.status(200).json(response);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Erro no servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async getOne(
    @Res() res: Response<Film>,
    @Param('id') id: string,
  ): Promise<Response<Film>> {
    try {
      const response = await this.films.getOne(id);
      return res.status(200).json(response);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Erro no servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch(':id')
  async updateOne(
    @Res() res: Response<any>,
    @Param('id') id: string,
    @Body() updateFilmDto: UpdateFilmDto,
  ): Promise<any> {
    try {
      const response = await this.films.updateOne(id, updateFilmDto);
      return res.status(200).json(response);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Erro no servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async deleteOne(
    @Res() res: Response<DeleteType>,
    @Param('id') id: string,
  ): Promise<Response<DeleteType>> {
    try {
      const response = await this.films.deleteOne(id);
      return res.status(200).json(response);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Erro no servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
