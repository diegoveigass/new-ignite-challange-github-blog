import dayjs from 'dayjs'
import { CardResponse } from '../../pages/Blog'
import { CardContainer } from './styles'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface CardProps {
  card: CardResponse
}

export function Card({ card: { body, created_at, title } }: CardProps) {
  return (
    <CardContainer>
      <header>
        <strong>{title}</strong>
        <span>{dayjs(new Date()).to(created_at)}</span>
      </header>
      <p>{body || 'Sem conteúdo!'}</p>
    </CardContainer>
  )
}
