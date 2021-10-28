import apiHandler from 'utils/api/apiHandler'
import validate from 'utils/api/validate'
import { usernameSchema } from 'schemas/user'
import User from 'models/User'

const changeUsername = apiHandler(async (request, response, { id }) => {
  const { username } = request.body

  if (!username.trim()) throw new Error('EmptyFields')

  validate(usernameSchema, username)

  await User.findByIdAndUpdate(id, { username })

  response.status(200).json({ message: 'Username edited' })
})

export default changeUsername
