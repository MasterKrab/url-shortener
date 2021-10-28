import Link from 'next/link'
import useUser from 'hooks/useUser'
import {
  StyledHeader,
  Container,
  List,
  LeftItem,
  StyledLink,
  UserLink,
} from './styles'
import UserImage from 'components/UserImage'

const Header = () => {
  const [user] = useUser()

  return (
    <StyledHeader>
      <Container>
        <nav>
          <List>
            <LeftItem>
              <Link href="/short" passHref>
                <StyledLink>Short</StyledLink>
              </Link>
            </LeftItem>
            {user && (
              <>
                <li>
                  <Link href="/links" passHref>
                    <StyledLink>Links</StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href="/user" passHref>
                    <UserLink>
                      Account
                      <UserImage username={user.username} size={25} />
                    </UserLink>
                  </Link>
                </li>
              </>
            )}
          </List>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
