import type { NextPage } from 'next'
import PageError from 'components/PageError'

const Custom505: NextPage = () => (
  <PageError
    text={['There was an error on the server.', 'Try to reload the page.']}
    imageName="500.svg"
    alt="Internal server error"
    width={800}
    height={600}
  />
)

export default Custom505
