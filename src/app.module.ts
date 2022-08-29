import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

// modules
import { FilmModule } from './modules/films/film.module';

// imports
import { MongooseModule } from '@nestjs/mongoose';

import { AuthenticationMiddleware } from './middleware/authentication';

import { FilmControler } from './modules/films/film.controller';

@Module({
  imports: [FilmModule, MongooseModule.forRoot('mongodb://localhost/nestone')],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        {
          path: 'films',
          method: RequestMethod.GET,
        },
        'films/(.*)',
      )
      .forRoutes(FilmControler);
  }
}
