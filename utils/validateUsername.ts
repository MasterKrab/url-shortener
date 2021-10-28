const validateUsernameRegex = (value: string) => {
  const regex = /^[a-zA-Z0-9]+$/

  return regex.test(value)
}

const validateUsername = (value: string, isRegisterForm: boolean): string => {
  if (!value.trim()) return 'Username is required'
  if (value.length < 3 && isRegisterForm)
    return 'Username must be longer than 3 characters'
  if (value.length > 13 && isRegisterForm)
    return 'Username must be shorten than 13 characters'
  if (!validateUsernameRegex(value) && isRegisterForm)
    return 'Username must be letters only (A-z)'
  return ''
}

export default validateUsername
