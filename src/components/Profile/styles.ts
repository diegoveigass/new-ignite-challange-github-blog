import styled from 'styled-components'

export const ProfileContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: -4rem auto 0;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem;

  > img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: bold;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      gap: 0.5rem;
      display: flex;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    text-align: justify;
    margin-top: 0.5rem;
  }
`

export const ProfileInfoFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 1.5rem;

  margin-top: 1.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
