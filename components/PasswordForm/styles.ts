import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 0.5rem 0.5rem 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
`

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
`

interface AlertProps {
  error: boolean
}

export const Alert = styled.p<AlertProps>`
  margin-top: 1rem;
  margin-bottom: 0;
  color: ${({ theme, error }) =>
    error ? theme.dangerColor : theme.activeColor};
`
