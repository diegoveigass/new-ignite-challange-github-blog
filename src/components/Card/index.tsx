import dayjs from 'dayjs'
import { CardResponse } from '../../pages/Blog'
import { CardContainer } from './styles'

import { useNavigate } from 'react-router-dom'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface CardProps {
  card: CardResponse
}

export function Card({ card: { body, created_at, title, number } }: CardProps) {
  const navigate = useNavigate()

  function handleNavigateToCardInfo(id: number) {
    navigate(`/${number}`)
  }

  return (
    <CardContainer onClick={() => handleNavigateToCardInfo(number)}>
      <header>
        <strong>{title}</strong>
        <span>{dayjs(new Date()).to(created_at)}</span>
      </header>
      <p>{body || 'Sem conteúdo!'}</p>
    </CardContainer>
  )
}
