import apiHandler from 'utils/api/apiHandler'
import validate from 'utils/api/validate'
import urlSchema from 'schemas/url'
import Url from 'models/Url'
import User from 'models/User'
import { nanoid as generateId } from 'nanoid'

const shortUrl = apiHandler(async (request, response, user) => {
  const { body } = request
  const { url, hash } = body

  validate(urlSchema, body)

  const normalizedHash: string = hash.trim()

  if (normalizedHash) {
    const result = await Url.findById(hash)

    if (result) throw new Error('DuplicatedHash')
  }

  const urlResult = await Url.create({
    url,
    user: user.id,
    visits: 0,
    _id: normalizedHash || generateId(7),
  })

  await urlResult.save()

  const userResult = await User.findById(user.id)

  userResult.urls.push(urlResult)

  await userResult.save()

  response.status(201).json(urlResult.toJSON())
})

export default shortUrl
