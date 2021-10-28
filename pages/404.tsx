import type { NextPage } from 'next'
import PageError from 'components/PageError'

const Custom404: NextPage = () => (
  <PageError
    text="We couldn't find the page you're looking for"
    imageName="404.svg"
    alt="Not found"
    width={1080}
    height={1080}
  />
)

export default Custom404
