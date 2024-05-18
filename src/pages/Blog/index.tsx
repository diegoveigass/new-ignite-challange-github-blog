import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsContainer } from './styles'
import axios from 'axios'

export interface User {
  name: string
  login: string
  bio: string
  html_url: string
  company: string
  avatar_url: string
  followers: number
}

export interface CardResponse {
  id: string
  title: string
  created_at: string
  body: string | null
}

export function Blog() {
  const [user, setUser] = useState<User | null>(null)
  const [cards, setCards] = useState<CardResponse[]>([])
  const [searchText, setSearchText] = useState('')

  function handleChangeSearchText(text: string) {
    setSearchText(text)
  }

  useEffect(() => {
    axios
      .get('https://api.github.com/users/diegoveigass')
      .then((response) => setUser(response.data))
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/issues?q=${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
      )
      .then((response) => setCards(response.data.items))
  }, [searchText])

  return (
    <div>
      <Profile user={user} />

      <SearchForm
        onSearchTextChange={handleChangeSearchText}
        publicationCount={cards.length}
      />

      <CardsContainer>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </CardsContainer>
    </div>
  )
}
