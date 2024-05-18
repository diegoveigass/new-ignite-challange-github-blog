import { z } from 'zod'
import { ActionsContainer, InputContainer, SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchFormProps {
  onSearchTextChange: (text: string) => void
  publicationCount: number
}

const searchFormSchema = z.object({
  text: z.string(),
})

type SearchFormData = z.infer<typeof searchFormSchema>

export function SearchForm({
  onSearchTextChange,
  publicationCount,
}: SearchFormProps) {
  const { handleSubmit, register, reset } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearch(data: SearchFormData) {
    onSearchTextChange(data.text)
  }

  function handleClearFormText() {
    onSearchTextChange('')
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <header>
        <strong>Publicações</strong>
        <span>{publicationCount} publicações</span>
      </header>
      <InputContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('text')}
        />
      </InputContainer>
      <ActionsContainer>
        <button type="submit">Buscar</button>
        <button onClick={handleClearFormText}>Limpar</button>
      </ActionsContainer>
    </SearchFormContainer>
  )
}
