import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import redirectToLogin from 'utils/api/redirectToLogin'
import useUser from 'hooks/useUser'
import { ThemeProvider } from 'styled-components'
import { colors } from 'styles/theme'
import GlobalStyles from 'styles/GlobalStyles'
import Header from 'components/Header'
import { Main } from 'styles/pages/app.styles'
import 'styles/normalize.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/fira-code'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(!process.browser)
  const router = useRouter()
  const [user, isLoaded] = useUser()

  const publicPaths = ['', 'login', 'register', '404', '500']

  const getIsInPublicPaths = (): boolean =>
    publicPaths.includes(router.pathname.replace('/', ''))

  useEffect(() => {
    if (isLoaded) {
      const authorized: boolean = getIsInPublicPaths() || !!user

      setIsAuthorized(authorized)

      !authorized && redirectToLogin()
    }
  }, [router.pathname, isLoaded])

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      {!getIsInPublicPaths() && <Header />}
      <Main id="main">{isAuthorized && <Component {...pageProps} />}</Main>
    </ThemeProvider>
  )
}

export default MyApp
