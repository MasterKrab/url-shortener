import styled, { css } from 'styled-components'

export const visuallyHidden = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
`

export const VisuallyHiddenSpan = styled.span`
  ${visuallyHidden}
`

export const VisuallyHiddenText = styled.p`
  ${visuallyHidden}
`
