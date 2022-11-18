import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <Profile />

      <SearchForm />

      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </div>
  )
}
