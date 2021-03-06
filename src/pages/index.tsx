import apiTmdb, { IGetHomeListResponse } from '~/API/tmdb'
import * as S from '~/styles/pages/Home'
import { useEffect, useState } from 'react'
import MovieList from '~/components/MovieList'
import ThumbnailMovie, { IThubmnailProps } from '~/components/ThumbnailMovie'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Loading from '~/components/Loading'
import { useFetch } from '~/hooks/useFetch'
import { IMovieData } from '~/components/MovieList/MovieRow'

export default function Home() {

  const [movieList, setMovieList] = useState<IGetHomeListResponse[]>([])
  const [thumbnailMovie, setThubnailMovie] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const loadAll = async () => {
      setLoading(true)
      const movie = await apiTmdb.getHomeList()
      setMovieList(movie)

      // Selecioando um Filme da lista para ser o destaque
      const originals = movie.filter(property => property.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosenMovie = originals[0].items.results[randomChosen]
      console.log('chosenMovie', chosenMovie)
      const chosenMovieDetails = await apiTmdb.getMovieDetails(chosenMovie.id, 'tv')
      setThubnailMovie(chosenMovieDetails)
      setLoading(false)
      console.log('chosenMovieDetails', chosenMovieDetails)
    }


    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 70) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <S.Container>
      <Header backgroundBlack={blackHeader} />
      {/* {loading ? <Loading /> : ( */}
      {/* <> */}
      {/* {thumbnailMovie && <ThumbnailMovie items={thumbnailMovie} />} */}
      <MovieList movieListaData={movieList} />
      <Footer />
      {/* </> */}
      {/* )} */}

    </S.Container>
  )
}
