import apiHandler from 'utils/api/apiHandler'
import User from 'models/User'

const user = apiHandler(async (request, response, { id }) => {
  const user = await User.findById(id)

  response.status(200).json(user.toJSON())
})

export default user
