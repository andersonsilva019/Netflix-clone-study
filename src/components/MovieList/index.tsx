import Movie from './MovieRow';
import { IMovie } from '~/app/services/movies';
import * as S from './styles';

export interface IMovieList {
  originalNetflix?: IMovie
  trending?: IMovie
  topRated?: IMovie
  action?: IMovie
  comedy?: IMovie
  horror?: IMovie
  romance?: IMovie
  documentary?: IMovie
  war?: IMovie
}

export default function MovieList({
  originalNetflix = { results: [] },
  trending = { results: [] },
  topRated = { results: [] },
  action = { results: [] },
  comedy = { results: [] },
  horror = { results: [] },
  romance = { results: [] },
  documentary = { results: [] },
  war = { results: [] }
}: IMovieList) {

  return (
    <S.Container>
      {originalNetflix.results.length > 0 && <Movie title="Originais da netflix" items={originalNetflix} />}
      {trending.results.length > 0 && <Movie title="Recomendados para você" items={trending} />}
      {topRated.results.length > 0 && <Movie title="Em alta" items={topRated} />}
      {action.results.length > 0 && <Movie title="Ação" items={action} />}
      {comedy.results.length > 0 && <Movie title="Comédia" items={comedy} />}
      {horror.results.length > 0 && <Movie title="Terror" items={horror} />}
      {romance.results.length > 0 && <Movie title="Romance" items={romance} />}
      {documentary.results.length > 0 && <Movie title="Documentário" items={documentary} />}
      {war.results.length > 0 && <Movie title="Guerra" items={war} />}
    </S.Container>
  )
}
