import { VisuallyHiddenText } from 'styles/utils/VisuallyHidden'

interface textProps {
  text?: string
  active: boolean
}

const Text = ({ text = 'Password', active }: textProps) => (
  <VisuallyHiddenText aria-live="polite">
    {text} {active ? 'hidden' : 'shown'}.
  </VisuallyHiddenText>
)

export default Text
