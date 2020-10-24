import * as S from './styles';
import { MdPlayArrow } from 'react-icons/md'
export interface IThubmnailProps {
  items: {
    id: number
    number_of_seasons: number
    original_name: string
    backdrop_path: string
    vote_average: number
    overview: string
    first_air_date: string
    genres: Array<{ id: number, name: string }>
  }
}

export default function ThumbnailMovie({ items }: IThubmnailProps) {

  const firstDate = new Date(items.first_air_date)
  let genres = []

  for (let i in items.genres) {
    genres.push(items.genres[i].name)
  }

  return (
    <S.Container style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${items.backdrop_path})` }}>
      <S.GradientVertical>
        <S.GradientHorizontal>
          <h2>{items.original_name}</h2>
          <S.Info>
            <strong>{items.vote_average} pontos</strong>
            <strong>{firstDate.getFullYear()}</strong>
            <strong>{items.number_of_seasons} temporada{items.number_of_seasons > 1 ? 's' : ''}</strong>
          </S.Info>
          <S.Description>{items.overview}</S.Description>
          <S.WrapperButton>
            <a href={`/watch/${items.id}`}>
              <MdPlayArrow size={20} color="#000" />
              Assistir
            </a>
            <a href={`/list/add/${items.id}`}>+ Minha lista</a>
          </S.WrapperButton>
          <strong>Gêneros: <span>{genres.join(', ')}</span></strong>
        </S.GradientHorizontal>
      </S.GradientVertical>
    </S.Container>
  )
}
