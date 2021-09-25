import Link from 'next/link'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { useState } from 'react';
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
function MovieComponent({ title, items }: IMovieProps) {

  const [scrollX, setScrollX] = useState(-1200)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }

    setScrollX(x);
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    const widthList = items?.results?.length * 200
    if ((window.innerWidth - widthList) > x) {
      x = (window.innerWidth - widthList) - 60
    }
    setScrollX(x)
  }

  return (
    <S.Container>
      <h2>{title}</h2>

      <S.KeyboardArrowLeft onClick={handleLeftArrow}>
        <MdKeyboardArrowLeft size={50} />
      </S.KeyboardArrowLeft>

      <S.KeyboardArrowRight onClick={handleRightArrow}>
        <MdKeyboardArrowRight size={50} />
      </S.KeyboardArrowRight>


      <S.MovieListArea>
        <S.MovieList style={{ marginLeft: scrollX, width: items?.results?.length * 300 }}>
          {items?.results?.length > 0 && items?.results?.map(item => (
            <Link key={item?.id} href={`http://localhost:3000/movie-details/${item?.id}`} passHref>
              <S.Item title={item?.name || item?.original_name}>
                <img src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} alt={item?.original_name} />
              </S.Item>
            </Link>
          ))}
        </S.MovieList>
      </S.MovieListArea>
    </S.Container>
  )
}

const Movie = React.memo(MovieComponent)

export default Movie
