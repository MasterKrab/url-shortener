import Image from 'next/image'

interface ImageProps {
  username: string
  size: number
}

const UserImage = ({ username, size }: ImageProps) => (
  <Image
    src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
    alt={username}
    width={size}
    height={size}
  />
)

export default UserImage
