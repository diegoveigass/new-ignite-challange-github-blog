import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 864px;

  margin: 4.5rem auto 0;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      font-weight: bold;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};

    border-radius: 6px;

    margin-top: 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
