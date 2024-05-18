import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 864px;

  margin: 4.5rem auto 0;

  display: flex;
  flex-direction: column;

  position: relative;

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
    color: ${(props) => props.theme['base-text']};

    border-radius: 6px;

    border: none;
    outline: 0;

    outline-style: none;
    box-shadow: none;
    border-color: transparent;

    height: 100%;

    width: 80%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const InputContainer = styled.div`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem 1rem;

  border-radius: 6px;

  margin-top: 0.75rem;

  height: 3rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ActionsContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button {
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    background-color: ${(props) => props.theme['base-post']};
    border: 0;
    height: 2rem;
    width: 5rem;
  }
`
