import { useRouter } from 'next/router'
import * as S from '~/styles/pages/MovieDetails';
export default function MovieDetails() {

  const router = useRouter()

  return (
    <S.Container>
      {router.query.id}
    </S.Container>
  )
}
