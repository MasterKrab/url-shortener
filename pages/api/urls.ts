import apiHandler from 'utils/api/apiHandler'
import User from 'models/User'

const urls = apiHandler(async (request, response, { id }) => {
  const userResult = await User.findById(id).populate('urls')

  response.status(200).json(userResult)
})

export default urls
