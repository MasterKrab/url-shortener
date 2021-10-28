import { useState, FormEvent } from 'react'
import validatePassword from 'utils/validatePassword'
import useField from 'hooks/useField'
import { changePassword } from 'utils/api/userApi'
import { Form, Title, Alert } from './styles'
import { FormButton } from 'styles/pages/user.styles'
import Field from './Field'

interface FormProps {
  username: string
}

interface AlertState {
  message: string
  error: boolean
}

const PasswordForm = ({ username }: FormProps) => {
  const oldPassword = useField({ type: 'password', name: 'old-password' })
  const newPassword = useField({ type: 'password', name: 'new-password' })
  const confirmNewPassword = useField({
    type: 'text',
    name: 'confirm-new-password',
  })
  const [alert, setAlert] = useState<AlertState | null>()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !oldPassword.value.trim() ||
      !newPassword.value.trim() ||
      !confirmNewPassword.value.trim()
    )
      return setAlert({ message: 'All fields are required', error: true })

    const validatePasswordResult: string = validatePassword(
      newPassword.value,
      true
    )

    if (validatePasswordResult)
      return setAlert({ message: validatePasswordResult, error: true })

    if (newPassword.value !== confirmNewPassword.value)
      return setAlert({
        message: "Password and confirm password don't are the same",
        error: true,
      })

    changePassword(oldPassword.value, newPassword.value)
      .then(() => {
        oldPassword.reset()
        newPassword.reset()
        confirmNewPassword.reset()
        setAlert({ message: 'Password edited succesfully', error: false })
      })
      .catch(() => setAlert({ message: 'Password is wrong', error: true }))
  }

  return (
    <Form onSubmit={handleSubmit} aria-labelledby="password-form-title">
      <Title id="password-form-title">Change Password</Title>
      <input
        type="text"
        name="username"
        autoComplete="username"
        defaultValue={username}
        readOnly={true}
        hidden
      />
      <Field
        {...oldPassword}
        text="Old password"
        id="old-password"
        autoComplete="current-password"
      />
      <Field
        {...newPassword}
        text="New password"
        id="new-password"
        autoComplete="new-password"
      />
      <Field
        {...confirmNewPassword}
        text="Confirm new password"
        id="confirm-new-password"
        autoComplete="new-password"
      />
      {alert && (
        <Alert role="alert" error={alert.error}>
          {alert.message}
        </Alert>
      )}
      <FormButton>Save</FormButton>
    </Form>
  )
}

export default PasswordForm
