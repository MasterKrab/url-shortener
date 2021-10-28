import { Button } from './styles'
import ShowPasswordIcons from 'components/ShowPassword/Icons'
import { VisuallyHiddenText } from 'styles/utils/VisuallyHidden'

interface ButtonProps {
  handleClick: () => void
  active: boolean
}

const ShowPasswordButton = ({ handleClick, active }: ButtonProps) => (
  <>
    <Button
      onClick={handleClick}
      type="button"
      role="switch"
      aria-checked={active}
      aria-label="Show Password"
    >
      <ShowPasswordIcons active={active} />
    </Button>
    <VisuallyHiddenText aria-live="polite">
      Password {active ? 'hidden' : 'shown'}.
    </VisuallyHiddenText>
  </>
)

export default ShowPasswordButton
