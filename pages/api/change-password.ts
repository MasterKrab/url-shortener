import apiHandler from 'utils/api/apiHandler'
import validate from 'utils/api/validate'
import { passwordSchema } from 'schemas/user'
import User from 'models/User'
import bcrypt from 'bcrypt'
import encriptPassword from 'utils/api/encriptPassword'

const changeUsername = apiHandler(async (request, response, { id }) => {
  const { password, newPassword } = request.body

  if (!password.trim() || !newPassword.trim()) throw new Error('EmptyFields')

  validate(passwordSchema, newPassword)

  const user = await User.findById(id)

  const validPassword: boolean = await bcrypt.compare(password, user.hash)

  if (!validPassword) throw new Error('InvalidCredentials')

  const hash = await encriptPassword(newPassword)

  await User.findByIdAndUpdate(id, { hash, tokens: [request.cookies.token] })

  response.status(200).json({ message: 'Password edited' })
})

export default changeUsername
