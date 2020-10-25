import { IMovieData } from "~/components/MovieList/MovieRow";
import { IThubmnailProps } from "~/components/ThumbnailMovie";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const language = 'pt-BR'

export interface IGetHomeListResponse {
  slug: string
  title: string
  items: { results: IMovieData[] }
}

export const basicFetch = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  const data = await response.json()

  return data
}

export default {
  getHomeList: async (): Promise<IGetHomeListResponse[]> => {
    return [
      {
        slug: 'originals',
        title: 'originais da netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=${language}&api_key=${API_KEY}`)
      }
    ]
  },
  getMovieDetails: async (movieId: number, typeMovie: string): Promise<IThubmnailProps> => {
    let detail = {}

    if (movieId) {
      switch (typeMovie) {
        case 'movie':
          detail = await basicFetch(`/movie/${movieId}?language=${language}&api_key=${API_KEY}`)
          break;
        case 'tv':
          detail = await basicFetch(`/tv/${movieId}?language=${language}&api_key=${API_KEY}`)
          break;
        default:
          detail = null
          break;
      }
    }

    return detail as IThubmnailProps
  }
}




