import * as S from './styles';
import { IGetHomeListResponse } from '~/API/tmdb';
import Movie from './MovieRow';

interface IMovieListProps {
  movieListaData: IGetHomeListResponse[]
}

export default function MovieList({ movieListaData }: IMovieListProps) {
  return (
    <S.Container>
      {movieListaData.map((item, key) => (
        <Movie key={key} title={item.title} items={item.items} />
      ))}
    </S.Container>
  )
}
