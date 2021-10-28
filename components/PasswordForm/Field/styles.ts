import styled from 'styled-components'
import inputFocus from 'styles/utils/inputFocus'

export const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 350px;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};

  ${inputFocus}
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
  width: 50px;
  font-size: 1.25rem;
`
