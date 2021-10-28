import ShowEyeIcon from 'components/icons/ShowEyeIcon'
import CloseEyeIcon from 'components/icons/CloseEyeIcon'

interface IconsProps {
  active: boolean
}

const ShowPasswordIcons = ({ active }: IconsProps) =>
  active ? (
    <CloseEyeIcon aria-hidden="true" width={'1em'} height={'0.9em'} />
  ) : (
    <ShowEyeIcon aria-hidden="true" width={'1em'} height={'0.9em'} />
  )

export default ShowPasswordIcons
