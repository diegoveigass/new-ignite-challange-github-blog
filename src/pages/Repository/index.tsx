import {
  FaCalendar,
  FaChevronLeft,
  FaComment,
  FaGithub,
  FaLink,
} from 'react-icons/fa'
import {
  Container,
  HeaderContainer,
  InfoFooter,
  MainContainer,
  MainText,
  RepositoryTextContainer,
} from './styles'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

interface Issue {
  body: string
  title: string
  comments: number
  created_at: string
  user: {
    login: string
  }
  url: string
}

export function Repository() {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issue | null>(null)

  useEffect(() => {
    if (!id) return
    axios
      .get(
        `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
      )
      .then((response) => setIssue(response.data))
  }, [id])

  return (
    <MainContainer>
      <Container>
        <HeaderContainer>
          <Link to="/">
            <FaChevronLeft />
            <span>Voltar</span>
          </Link>
          <a href={issue?.url}>
            <FaLink />
            <span>Ver no Github</span>
          </a>
        </HeaderContainer>
        <MainText>{issue?.title}</MainText>
        <InfoFooter>
          <div>
            <FaGithub size={16} />
            <span>{issue?.user.login}</span>
          </div>
          <div>
            <FaCalendar size={16} />
            <span>{dayjs(new Date()).to(issue?.created_at)}</span>
          </div>
          <div>
            <FaComment size={16} />
            <span>{issue?.comments} comentários</span>
          </div>
        </InfoFooter>
      </Container>
      <RepositoryTextContainer>
        <span
          dangerouslySetInnerHTML={{
            __html: issue?.body ? issue?.body : 'Sem comentários',
          }}
        ></span>
      </RepositoryTextContainer>
    </MainContainer>
  )
}
