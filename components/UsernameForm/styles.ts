import styled from 'styled-components'
import inputFocus from 'styles/utils/inputFocus'

export const Form = styled.form`
  padding: 0.5rem 0.5rem 1.5rem;
  border-top: 2px solid ${({ theme }) => theme.secondaryColor};
  border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
`

export const Input = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 0.25rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};

  ${inputFocus}
`

export const Error = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.dangerColor};
`
