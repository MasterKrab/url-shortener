import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  font-size: min(1rem, 3.5vw);
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  font-family: 'Fira Code', 'Poppins', sans-serif;
`

export const Text = styled.p`
  line-height: 1.5;
  font-size: 1.35em;
`

const move = keyframes`
  to {
    transform: translateY(25px)
  }
`

export const ImageContainer = styled.div`
  animation: ${move} 1.5s ease-out infinite alternate;
  margin-bottom: 25px;
`

export const StyledLink = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.activeColor};
  padding: 0.5rem 1rem;
  margin-top: 3rem;
  font-size: 1.5em;
  font-weight: 500;
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.elementColor};

  @media screen and (min-width: 768px) {
    transition: transform 0.2s;

    &:hover {
      transform: scale(0.95);
    }
  }
`
