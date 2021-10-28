import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import useField from 'hooks/useField'
import validateUsername from 'utils/validateUsername'
import validatePassword from 'utils/validatePassword'
import { login, register } from 'utils/api/userApi'
import ShowPasswordButton from './ShowPasswordButton'
import {
  Form,
  Title,
  Field,
  Label,
  Input,
  Error,
  FormAlert,
  Bottom,
  Button,
  Text,
  StyledLink,
} from './styles'

interface Props {
  type: 'register' | 'login'
}

const API_FUNCTIONS = { login, register }

interface FormAlertState {
  message: string
  error: boolean
}

const UserForm = ({ type }: Props) => {
  const router = useRouter()
  const username = useField({ type: 'text', name: 'username' })
  const [usernameError, setUsernameError] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>('')
  const password = useField({
    type: showPassword ? 'text' : 'password',
    name: 'password',
  })
  const [formAlert, setFormAlert] = useState<FormAlertState | null>(null)

  useEffect(() => {
    router.query.register &&
      setFormAlert({ message: 'Please login with your account', error: false })
  }, [])

  const isRegisterForm = type === 'register'

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setFormAlert(null)

    if (!username.value.trim() || !password.value.trim()) {
      setUsernameError(validateUsername(username.value, isRegisterForm))
      setPasswordError(validatePassword(password.value, isRegisterForm))
      return
    }

    API_FUNCTIONS[type](username.value, password.value).catch(({ message }) => {
      setFormAlert({
        message:
          message === 'Internal server error'
            ? 'There was an error, try again later'
            : message,
        error: true,
      })
    })
  }

  const handleInput =
    (
      callback: (value: string, isRegisterForm: boolean) => string,
      setStateError: Dispatch<SetStateAction<string>>
    ) =>
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setStateError(callback(target.value, isRegisterForm))

  return (
    <Form onSubmit={handleSubmit} aria-labelledby="title">
      <Title id="title">{isRegisterForm ? 'Welcome!' : 'Hello again!'}</Title>
      <Field>
        <Label htmlFor="username" id="username-label">
          Username
        </Label>
        <Input
          {...username}
          onInput={handleInput(validateUsername, setUsernameError)}
          id="username"
          aria-labelledby="username-label username-error"
          aria-required="true"
          autoComplete="username"
          maxLength={12}
          aria-invalid={!!usernameError}
        />
        {usernameError && (
          <Error
            id="username-error"
            aria-live="assertive"
            aria-relevant="additions removals"
          >
            {usernameError}
          </Error>
        )}
      </Field>
      <Field>
        <Label htmlFor="password" id="password-label">
          Password
        </Label>
        <Input
          {...password}
          onInput={handleInput(validatePassword, setPasswordError)}
          id="password"
          aria-labelledby="password-label password-error"
          aria-required="true"
          autoComplete={isRegisterForm ? 'new-password' : 'current-password'}
          aria-invalid={!!passwordError}
        />
        <ShowPasswordButton
          handleClick={handleClickShowPassword}
          active={showPassword}
        />
        {passwordError && (
          <Error
            id="password-error"
            aria-live="assertive"
            aria-relevant="additions removals"
          >
            {passwordError}
          </Error>
        )}
      </Field>
      <Bottom>
        {formAlert && (
          <FormAlert role="alert" error={formAlert.error}>
            {formAlert.message}
          </FormAlert>
        )}
        <Button disabled={!!(usernameError || passwordError)}>
          {isRegisterForm ? 'Register' : 'Login'}
        </Button>

        <Text>
          {isRegisterForm
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <Link href={`/${isRegisterForm ? 'login' : 'register'}`} passHref>
            <StyledLink
              aria-label={
                isRegisterForm ? 'Create an account' : 'Login with your account'
              }
            >
              {isRegisterForm ? 'Login' : 'Register'}
            </StyledLink>
          </Link>
        </Text>
      </Bottom>
    </Form>
  )
}

export default UserForm
