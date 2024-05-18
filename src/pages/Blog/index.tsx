import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsContainer } from './styles'

export function Blog() {
  return (
    <div>
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
