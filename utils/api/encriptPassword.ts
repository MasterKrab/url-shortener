import bcrypt from 'bcrypt'

const encriptPassword = async (password: string): Promise<string> => {
  const saltRounds = 10
  const hash = await bcrypt.hash(password, saltRounds)
  return hash
}

export default encriptPassword
