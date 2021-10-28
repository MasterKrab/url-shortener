import { css } from 'styled-components'

const inputFocus = css`
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.activeColor};
    box-shadow: 0 0 10px 2.5px ${({ theme }) => theme.activeShadowColor};
  }
`

export default inputFocus
