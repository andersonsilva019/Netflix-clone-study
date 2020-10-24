import * as S from './styles';


export interface IMovieData {
  id: number
  original_name: string;
  name: string;
  poster_path: string
}

interface IMovieProps {
  title: string;
  items: { results: IMovieData[] }
}

export default function Movie({ title, items }: IMovieProps) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <S.MovieListArea>
        <S.MovieList>
          {items.results.length > 0 && items.results.map((item, key) => (
            <S.Item key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
            </S.Item>
          ))}
        </S.MovieList>
      </S.MovieListArea>
    </S.Container>
  )
}
