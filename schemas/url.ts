import Joi from 'joi'

const hash = Joi.string()
  .optional()
  .allow('')

const url = Joi.object({
  url: Joi.string()
    .uri({
      scheme: ['http', 'https'],
    })
    .required(),
  hash,
  shortUrl: hash,
})

export default url
