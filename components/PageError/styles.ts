import styled from 'styled-components'

export const Title = styled.h1`
  font-size: min(2rem, 3.75vw);
  text-align: center;
`

export const ImageContainer = styled.div`
  width: 90%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.elementColor};
  width: max-content;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0 0 10px ${({ theme }) => theme.activeShadowColor};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.activeColor};
    color: ${({ theme }) => theme.elementColor};
  }
`
