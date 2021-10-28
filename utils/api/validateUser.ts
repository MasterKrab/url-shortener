import validate from 'utils/api/validate'
import userSchema from 'schemas/user'

const validateUser = (username: string, password: string) => {
  if (!username.trim() || !password.trim()) throw new Error('EmptyFields')

  validate(userSchema, { username, password })
}

export default validateUser
