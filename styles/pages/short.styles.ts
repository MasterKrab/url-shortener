import styled from 'styled-components'
import inputFocus from 'styles/utils/inputFocus'

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 5vmin;
`

export const FormBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  row-gap: 0.5rem;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`

export const Input = styled.input`
  grid-column: span 4;
  padding: 0.5rem 1rem;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
  transition: border-color 0.2s, box-shadow 0.2s;

  ${inputFocus}
`

export const HashInput = styled(Input)`
  grid-row: 2;
  grid-column: span 3;

  @media screen and (max-width: 768px) {
    grid-column: span 4;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.primaryColor};

  @media screen and (max-width: 768px) {
    grid-row: 3;
    grid-column: span 4;
  }
`
export const OutputTitle = styled.h2`
  display: inline;
  margin-right: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
`

export const Output = styled.output`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 1.1rem;
`
export const Error = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.dangerColor};

  &::before {
    content: url('/assets/icons/error-alert.svg');
    position: relative;
    top: 2.5px;
    margin-right: 0.25rem;
  }
`
