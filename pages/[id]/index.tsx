import type { GetServerSideProps } from 'next'
import Url from 'models/Url'
import 'utils/api/connectMongo'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query

  const result = await Url.findOneAndUpdate(
    { _id: id },
    { $inc: { visits: 1 } }
  )

  if (!result)
    return {
      notFound: true,
    }

  return {
    redirect: {
      destination: result.url,
      statusCode: 301,
    },
  }
}

const ShortUrl = () => {}

export default ShortUrl
