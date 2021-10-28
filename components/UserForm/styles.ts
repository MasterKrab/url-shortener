import styled, { css } from 'styled-components'

const flex = css`
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  position: relative;
  ${flex}
  gap: min(2.5rem, 6vw);
  background-color: #fff;
  width: 100%;
  max-width: 450px;
  font-size: min(1.5rem, 6vw);
  font-weight: 500;
  padding: 1.25em 1.5em;
  margin: auto;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

export const Field = styled.div`
  position: relative;
  ${flex}
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 0.8em;
`

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
  height: 30px;
  font-size: 0.75em;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.activeColor};
    outline: none;
  }
`

export const Error = styled.p`
  position: absolute;
  top: 50px;
  left: 5px;
  font-size: 0.65em;
  color: ${({ theme }) => theme.dangerColor};
`

interface FormAlertProps {
  error: boolean
}

export const FormAlert = styled.p<FormAlertProps>`
  font-size: 0.75em;
  margin-top: 0;
  color: ${({ theme, error }) =>
    error ? theme.dangerColor : theme.activeColor};
`

export const Bottom = styled.div`
  text-align: center;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.75em;
  font-weight: 500;
  margin-top: 0.5rem;
  padding: 0.5rem 1.25rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.elementColor};

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;

    &:hover {
      background-color: transparent;
      border-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
`

export const Text = styled.p`
  font-size: 0.6em;
  margin-top: 2em;
`

export const StyledLink = styled.a`
  margin-top: 0.5rem;
  margin-left: 1rem;
`
