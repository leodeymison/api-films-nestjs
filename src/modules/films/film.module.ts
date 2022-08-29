import { Global, Module } from '@nestjs/common';
import { FilmControler } from './film.controller';
import { FilmService } from './film.service';

// db
import { MongooseModule } from '@nestjs/mongoose';
import { FilmClass, FilmSchema } from '../../schemas/Film';

// @Global() // disponível para todos os lugares
@Module({
  imports: [
    MongooseModule.forFeature([{ name: FilmClass.name, schema: FilmSchema }]),
  ],
  controllers: [FilmControler],
  providers: [FilmService],
  exports: [FilmService], // Qualquer módule que import esse módulo tem acesso
})
export class FilmModule {}
