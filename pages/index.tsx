// import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import {
  Container,
  Title,
  Text,
  ImageContainer,
  StyledLink,
} from 'styles/pages/home.styles'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Container>
      <Title>URL Shortener</Title>
      <Text>
        This is a simple URL shortener. <br /> It will shorten your URL and
        redirect you to the original URL.
      </Text>
      <ImageContainer>
        <Image
          src="/assets/icons/link.svg"
          alt="link"
          width={150}
          height={150}
        />
      </ImageContainer>
      <Link href="/register" passHref>
        <StyledLink>Get started</StyledLink>
      </Link>
    </Container>
  )
}

export default Home
