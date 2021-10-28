import styled from 'styled-components'
import resetList from 'styles/utils/resetList'

export const Section = styled.section`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.elementColor};
  padding: 1rem 2rem;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

export const List = styled.ul`
  ${resetList}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 40vh;
`

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  padding: 1rem 2rem;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 350px) 1fr 200px;
  }
`

export const Text = styled.p`
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  white-space: nowrap;
  width: 100%;
  min-height: 1rem;
`

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.secondaryColor} ${theme.primaryColor}`};

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.primaryColor};
    height: 0.35rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondaryColor};
  }

  @media screen and (min-width: 1200px) {
    overflow-x: hidden;

    &:hover {
      overflow-x: auto;
    }
  }
`

export const Bold = styled.span`
  font-weight: 500;
  user-select: none;
`

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.activeColor};
    text-decoration: underline;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const Button = styled.button`
  text-align: start;
  text-transform: uppercase;
  font-weight: 500;
  width: min-content;
  color: inherit;

  @media screen and (min-width: 1200px) {
    margin-left: auto;
  }
`
