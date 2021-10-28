import { useState, FormEvent, ChangeEvent } from 'react'
import useField from 'hooks/useField'
import type { UserModel } from 'models/User'
import { changeUsername } from 'utils/api/userApi'
import validateUsername from 'utils/validateUsername'
import { Form, Input, Error } from './styles'
import { FormButton } from 'styles/pages/user.styles'

const UsernameForm = ({ username }: UserModel) => {
  const usernameField = useField({ type: 'text', name: 'username' })
  const [alert, setAlert] = useState<string>('')

  const validateUsernameField = (value: string): string =>
    validateUsername(value, true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    changeUsername(usernameField.value).catch(() =>
      setAlert('An error has ocurred')
    )
  }

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target

    if (!value.trim()) return setAlert('Please provide an username')

    setAlert(validateUsernameField(value))
  }

  return (
    <Form onSubmit={handleSubmit} aria-labelledby="username-form-title">
      <h2 id="username-form-title">Change Username</h2>
      <Input
        {...usernameField}
        onInput={handleInput}
        aria-label="Username to change"
        id="username"
        aria-labelledby="username-error"
        aria-required="true"
        autoComplete="username"
        maxLength={12}
        aria-invalid={!!validateUsernameField(usernameField.value)}
      />
      {alert && (
        <Error
          id="username-error"
          aria-live="assertive"
          aria-relevant="additions removals"
        >
          {alert}
        </Error>
      )}
      <FormButton disabled={!!validateUsernameField(usernameField.value)}>
        Save
      </FormButton>
    </Form>
  )
}

export default UsernameForm
