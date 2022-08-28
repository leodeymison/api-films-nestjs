import { FilmService } from './films/film.service';
import { FilmControler } from './films/film.controller';

const Controllers = [FilmControler];
const Providers = [FilmService];

export { Controllers, Providers };
