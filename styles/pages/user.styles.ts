import styled, { keyframes } from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Settings = styled.section`
  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`

export const FormButton = styled.button`
  display: block;
  width: min-content;
  font-weight: 500;
  margin-top: 0.5rem;
`

export const Button = styled(FormButton)`
  background-color: ${({ theme }) => theme.secondaryColor};
  margin-top: 1rem;
  margin-left: 0.7rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.elementColor};

  @media screen and (min-width: 768px) {
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;

    &:hover {
      background-color: transparent;
      border-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
`

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.dangerColor};
  border-color: transparent;
  width: max-content;
  margin-bottom: 1rem;
`

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const Modal = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  animation: ${opacity} 0.2s;
`

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elementColor};
  max-width: 500px;
  padding: 1rem 1.25em;
  font-size: min(1.1rem, 4.5vw);
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 12px;
    background-color: ${({ theme }) => theme.secondaryColor};
    width: 2px;
    height: 20px;
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media screen and (min-width: 768px) {
    &::before,
    &::after {
      transition: background-color 0.2s;
    }

    &:hover::before,
    &:hover::after {
      background-color: ${({ theme }) => theme.activeColor};
    }
  }
`

export const FormTitle = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0;
`

export const Label = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  padding: 0.35rem;
  margin-bottom: 0.5rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.activeColor};
  }
`

export const ConfirmDeleteButton = styled.button`
  background-color: ${({ theme }) => theme.dangerColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  width: min-content;
  opacity: 0.9;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`
