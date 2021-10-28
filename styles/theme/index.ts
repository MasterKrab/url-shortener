import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string
    secondaryColor: string
    elementColor: string
    activeColor: string
    activeShadowColor: string
    dangerColor: string
  }
}

export const colors: DefaultTheme = {
  primaryColor: '#eee',
  secondaryColor: '#222',
  elementColor: '#fff',
  activeColor: '#4169e1',
  activeShadowColor: 'rgba(65, 105, 225, 0.35)',
  dangerColor: '#ff3860',
}
