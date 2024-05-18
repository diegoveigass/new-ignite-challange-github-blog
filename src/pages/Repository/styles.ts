import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
`

export const Container = styled.div`
  margin: -4rem auto 0;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 2rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    all: initial;
    color: ${(props) => props.theme.blue};
    font-size: 0.875rem;
    font-family: 'Nunito';
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`

export const MainText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  margin-top: 1.5rem;
`

export const InfoFooter = styled.footer`
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
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const RepositoryTextContainer = styled.div`
  width: 100%;
  padding: 40px 32px;

  background-color: ${(props) => props.theme['base-background']};
`
