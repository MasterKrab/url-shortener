import styled from 'styled-components'
import resetList from 'styles/utils/resetList'

export const StyledHeader = styled.header`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`

export const Container = styled.div`
  padding: 1rem;
`

export const List = styled.ul`
  ${resetList}
  display: flex;
  align-items: center;
  justify-items: flex-end;
  gap: 1.5rem;
`

export const LeftItem = styled.li`
  margin-right: auto;
`

export const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
`

export const UserLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
`
