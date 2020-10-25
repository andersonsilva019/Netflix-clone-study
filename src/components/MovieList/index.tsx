import * as S from './styles';
import { IGetHomeListResponse, API_KEY, language, BASE_URL } from '~/API/tmdb';
import Movie, { IMovieData } from './MovieRow';
import { useFetch } from '~/hooks/useFetch';

interface IMovieListProps {
  movieListaData: IGetHomeListResponse[]
}

export default function MovieList({ movieListaData }: IMovieListProps) {

  const { data: originalNetflix } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/discover/tv?with_network=213&language=${language}&api_key=${API_KEY}`)
  const { data: trending } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/trending/all/week?language=${language}&api_key=${API_KEY}`)
  const { data: toprated } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/movie/top_rated?language=${language}&api_key=${API_KEY}`)
  const { data: action } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/discover/movie?with_genres=28&language=${language}&api_key=${API_KEY}`)
  const { data: comedy } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/discover/movie?with_genres=35&language=${language}&api_key=${API_KEY}`)
  const { data: horror } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/discover/movie?with_genres=27&language=${language}&api_key=${API_KEY}`)
  const { data: romance } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/discover/movie?with_genres=10749&language=${language}&api_key=${API_KEY}`)
  const { data: documentary } = useFetch<{ results: IMovieData[] }>(`${BASE_URL}/discover/movie?with_genres=99&language=${language}&api_key=${API_KEY}`)

  return (

    <S.Container>
      {originalNetflix ? <Movie title="Originais da netflix" items={originalNetflix} /> : <h2>CARREGANDO...</h2>}
      {trending ? <Movie title="Recomendados para você" items={trending} /> : <h2>CARREGANDO...</h2>}
      {toprated ? <Movie title="Em alta" items={toprated} /> : <h2>CARREGANDO...</h2>}
      {action ? <Movie title="Ação" items={action} /> : <h2>CARREGANDO...</h2>}
      {comedy ? <Movie title="Comédia" items={comedy} /> : <h2>CARREGANDO...</h2>}
      {horror ? <Movie title="Terror" items={horror} /> : <h2>CARREGANDO...</h2>}
      {romance ? <Movie title="Romance" items={romance} /> : <h2>CARREGANDO...</h2>}
      {documentary ? <Movie title="Romance" items={documentary} /> : <h2>CARREGANDO...</h2>}
      {/* {movieListaData.map((item, key) => (
        <Movie key={key} title="Originais da Netflix" items={item.items} />
      ))} */}
    </S.Container>
  )
}
