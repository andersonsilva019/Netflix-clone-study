import * as S from './styles';
import { MdPlayArrow } from 'react-icons/md'
import { useFetchMovieDetailsQuery } from '~/app/services/movies';
export interface IThubmnailProps {
  tvId: number
}

export default function ThumbnailMovie({ tvId }: IThubmnailProps) {

  const { data } = useFetchMovieDetailsQuery(tvId)

  const firstDate = new Date(data?.first_air_date)
  let genres = []

  for (let i in data?.genres) {
    genres.push(data?.genres[i].name)
  }

  return (
    <S.Container style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})` }}>
      <S.GradientVertical>
        <S.GradientHorizontal>
          <h2>{data?.original_name}</h2>
          <S.Info>
            <strong>{data?.vote_average} pontos</strong>
            <strong>{firstDate.getFullYear()}</strong>
            <strong>{data?.number_of_seasons} temporada{data?.number_of_seasons > 1 ? 's' : ''}</strong>
          </S.Info>
          <S.Description>{data?.overview}</S.Description>
          <S.WrapperButton>
            <a href={`/watch/${data?.id}`}>
              <MdPlayArrow size={20} color="#000" />
              Assistir
            </a>
            <a href={`/list/add/${data?.id}`}>+ Minha lista</a>
          </S.WrapperButton>
          <strong>Gêneros: <span>{genres.join(', ')}</span></strong>
        </S.GradientHorizontal>
      </S.GradientVertical>
    </S.Container>
  )
}
