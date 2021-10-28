import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   html{
      scroll-behavior: smooth;
      scroll-padding-top: 5rem;
      box-sizing: border-box;
   }
   
   *,
   *::before,
   *::after{
      box-sizing: inherit;
   }

   #__next{
      min-height: 100vh;
      height: 100%;

   }
   
   body{
      font-family: 'Poppins', sans-serif;
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.secondaryColor};
      transition: background-color 0.2s, color 0.2s;
      height: 100vh;
      
      &::-webkit-scrollbar{
         width: 0.5rem;
      }
      
      &::-webkit-scrollbar-thumb{
         background-color: ${({ theme }) => theme.secondaryColor};
         border-radius: 0.5rem;
      }
   }
   
   a,
   button{
      &:focus,
      &:focus-visible{
         outline: 3px dashed ${({ theme }) => theme.secondaryColor};
         outline-offset: 3px;
      }

      &:focus:not(:focus-visible){
         outline: none;
      }
   }

   a{
      color: ${({ theme }) => theme.activeColor};
   }

   img{
      display: block;
      max-width: 100%;
   }
  

   button,
   label{
      -webkit-tap-highlight-color: transparent;
   }
   
   button{
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
   }
`

export default GlobalStyles
