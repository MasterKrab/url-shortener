import type { GetServerSideProps } from 'next'
import { useState, useRef, FormEvent } from 'react'
import useField from 'hooks/useField'
import verifyToken from 'utils/api/verifyToken'
import UserDatabase, { UserModel } from 'models/User'
import {
  ImageContainer,
  Title,
  Settings,
  Button,
  DeleteButton,
  Modal,
  Form,
  CloseButton,
  FormTitle,
  Label,
  Input,
  ConfirmDeleteButton,
} from 'styles/pages/user.styles'
import UserImage from 'components/UserImage'
import UsernameForm from 'components/UsernameForm'
import connectMongo from 'utils/api/connectMongo'
import PasswordForm from 'components/PasswordForm'
import FocusTrap from 'components/FocusTrap'
import { logout, deleteAccount } from 'utils/api/userApi'

export const getServerSideProps: GetServerSideProps = async ({
  req: request,
  res: response,
}) => {
  try {
    await connectMongo()
    const { token } = request.cookies
    const { id } = await verifyToken(token)
    const user = await UserDatabase.findById(id)

    return {
      props: {
        user: JSON.parse(JSON.stringify(user.toJSON())),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: '/login',
        statusCode: 301,
      },
    }
  }
}

interface UserProps {
  user: UserModel
}

const User = ({ user }: UserProps) => {
  const [openModal, setOpenModal] = useState(false)
  const confirmUsername = useField({ type: 'text', name: 'confirm-username' })
  const modalContainer = useRef(null)
  const { username } = user

  const handleToggleOpenModal = () => setOpenModal(!openModal)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    confirmUsername.value === username && deleteAccount()
  }

  return (
    <>
      <ImageContainer>
        <UserImage username={username} size={100} />
      </ImageContainer>
      <Title>{username}</Title>
      <Settings aria-label="settings">
        <UsernameForm username={username} />
        <PasswordForm username={username} />
        <Button onClick={logout}>Logout</Button>
        <DeleteButton onClick={handleToggleOpenModal}>
          Delete account
        </DeleteButton>
        {openModal && (
          <FocusTrap
            parentElement={modalContainer}
            onClose={handleToggleOpenModal}
          >
            <Modal
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-delete-account-label"
              ref={modalContainer}
            >
              <Form onSubmit={handleSubmit}>
                <FormTitle id="modal-delete-account-label">
                  Are you sure?
                </FormTitle>
                <p>
                  This will permanently delete your account and all your links.
                </p>
                <Label htmlFor="confirm-username">
                  Please type <strong>{username}</strong> to confirm
                </Label>
                <Input
                  {...confirmUsername}
                  id="confirm-username"
                  aria-required="true"
                  aria-invalid={username !== confirmUsername.value}
                />
                <ConfirmDeleteButton
                  disabled={username !== confirmUsername.value}
                >
                  Confirm
                </ConfirmDeleteButton>
                <CloseButton
                  type="button"
                  aria-label="Close"
                  onClick={handleToggleOpenModal}
                />
              </Form>
            </Modal>
          </FocusTrap>
        )}
      </Settings>
    </>
  )
}

export default User
