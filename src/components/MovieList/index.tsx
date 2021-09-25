import Movie from './MovieRow';
import { IMovie } from '~/app/services/movies';
import * as S from './styles';

export interface IMovieList {
  originalNetflix: IMovie
  trending: IMovie
  topRated: IMovie
  action: IMovie
  comedy: IMovie
  horror: IMovie
  romance: IMovie
  documentary: IMovie
}

export default function MovieList({
  originalNetflix,
  trending,
  topRated,
  action,
  comedy,
  horror,
  romance,
  documentary
}: IMovieList) {

  return (
    <S.Container>
      <Movie title="Originais da netflix" items={originalNetflix} />
      <Movie title="Recomendados para você" items={trending} />
      <Movie title="Em alta" items={topRated} />
      <Movie title="Ação" items={action} />
      <Movie title="Comédia" items={comedy} />
      <Movie title="Terror" items={horror} />
      <Movie title="Romance" items={romance} />
      <Movie title="Documentário" items={documentary} />
    </S.Container>
  )
}
