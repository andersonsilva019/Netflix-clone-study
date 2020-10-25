import * as S from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useState } from 'react';


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
          {items?.results?.length > 0 && items?.results?.map((item, key) => (
            <S.Item key={key} href={`http://localhost:3000/movie-details/${item?.id}`}>
              <img src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} alt={item?.name} />
            </S.Item>
          ))}
        </S.MovieList>
      </S.MovieListArea>
    </S.Container>
  )
}
