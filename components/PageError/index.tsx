import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Title, ImageContainer, StyledLink } from './styles'
import { nanoid as id } from 'nanoid'

interface PageErrorProps {
  text: string | string[]
  imageName: string
  alt: string
  width: number
  height: number
}

const PageError = ({ text, imageName, alt, width, height }: PageErrorProps) => (
  <>
    <Title>
      {typeof text === 'string'
        ? text
        : text.map((text: string) => (
            <Fragment key={id()}>
              <br />
              {text}
            </Fragment>
          ))}
    </Title>
    <ImageContainer>
      <Image
        src={`/assets/illustrations/${imageName}`}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
      />
    </ImageContainer>
    <Link href="/" passHref>
      <StyledLink>Back to Home</StyledLink>
    </Link>
  </>
)

export default PageError
