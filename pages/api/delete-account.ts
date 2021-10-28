import apiHandler from 'utils/api/apiHandler'
import Url from 'models/Url'
import User from 'models/User'
import removeTokenCookies from 'utils/api/removeTokenCookies'

const deleteAccount = apiHandler(async (request, response, { id }) => {
  await Url.deleteMany({ user: { $eq: id } })

  await User.findByIdAndDelete(id)

  removeTokenCookies(response)
  response.status(200).json({ message: 'Deleted user and urls' })
})

export default deleteAccount
