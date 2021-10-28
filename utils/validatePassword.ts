const validatePassword = (
  value: string,
  isRegisterForm: boolean = false
): string => {
  const oneDigitRegex = /\d/
  const oneLowerCaseRegex = /[a-z]/
  const oneUppercaseRegex = /[A-Z]/

  const test = (regex: RegExp): boolean => !regex.test(value)

  if (!value.trim()) return 'Password is required'
  if (!isRegisterForm) return ''
  if (test(oneDigitRegex)) return 'Must contain at least one digit'
  if (test(oneLowerCaseRegex)) return 'Must contain at least one lowercase'
  if (test(oneUppercaseRegex)) return 'Must contain at least one uppercase'
  if (value.length < 8) return 'Must contain at least 8 characters'
  return ''
}

export default validatePassword
