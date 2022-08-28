import { Module } from '@nestjs/common';
import { Controllers, Providers } from './module';

// imports
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema, FilmClass } from './schemas/Film';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestone'),
    MongooseModule.forFeature([{ name: FilmClass.name, schema: FilmSchema }]),
  ],
  controllers: [...Controllers],
  providers: [...Providers],
})
export class AppModule {}
