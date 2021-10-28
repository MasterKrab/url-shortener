import { useState, ChangeEvent } from 'react'
import { Container, Input, Button } from './styles'
import ShowPasswordIcons from 'components/ShowPassword/Icons'
import { VisuallyHiddenText } from 'styles/utils/VisuallyHidden'

interface FieldProps {
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  id: string
  text: string
  autoComplete: 'current-password' | 'new-password'
}

const Field = ({
  name,
  value,
  onChange,
  id,
  autoComplete,
  text,
}: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => setShowPassword(!showPassword)

  return (
    <Container>
      <Input
        name={name}
        onChange={onChange}
        value={value}
        type={showPassword ? 'text' : 'password'}
        id={id}
        aria-label={text}
        placeholder={text}
        autoComplete={autoComplete}
        aria-required="true"
      />
      <Button
        onClick={handleClick}
        type="button"
        role="switch"
        aria-checked={showPassword}
        aria-label="Show Password"
      >
        <ShowPasswordIcons active={showPassword} />
      </Button>
      <VisuallyHiddenText aria-live="polite">
        {text} {showPassword ? 'hidden' : 'shown'}.
      </VisuallyHiddenText>
    </Container>
  )
}

export default Field
