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

export function Repository() {
  return (
    <MainContainer>
      <Container>
        <HeaderContainer>
          <a href="#">
            <FaChevronLeft />
            <span>Voltar</span>
          </a>
          <a href="#">
            <FaLink />
            <span>Ver no Github</span>
          </a>
        </HeaderContainer>
        <MainText>Javascript data types and data structures</MainText>
        <InfoFooter>
          <div>
            <FaGithub size={16} />
            <span>diegoveigass</span>
          </div>
          <div>
            <FaCalendar size={16} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FaComment size={16} />
            <span>5 comentários</span>
          </div>
        </InfoFooter>
      </Container>
      <RepositoryTextContainer>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quam rerum facilis iure repudiandae neque iste vero quaerat quas.
          Eveniet repellendus vitae culpa magni! Fugiat aliquid nobis
          repudiandae enim delectus?
        </span>
      </RepositoryTextContainer>
    </MainContainer>
  )
}
