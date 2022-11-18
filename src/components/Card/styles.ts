import styled from 'styled-components'

export const CardContainer = styled.a`
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid transparent;

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    strong {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};
    text-align: justify;
    overflow: hidden;
    position: relative;
    line-height: 1.6rem;
    max-height: 7.5rem;
    text-overflow: ellipsis;
  }
`
