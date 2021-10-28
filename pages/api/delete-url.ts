import apiHandler from 'utils/api/apiHandler'
import Url from 'models/Url'
import User from 'models/User'

const deleteUrl = apiHandler(async (request, response, user) => {
  const { id } = request.body

  const deletedUrl = await Url.findOneAndDelete(
    { _id: id },
    { user: { $eq: user.id } }
  )

  if (!deletedUrl)
    return response
      .status(400)
      .json({ message: 'Url not found or not owner user' })

  await User.findOneAndUpdate({ _id: user.id }, { $pull: { urls: id } })

  response.status(200).json({ message: 'Deleted Url' })
})

export default deleteUrl
