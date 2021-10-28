import Joi from 'joi'

export const usernameSchema = Joi.string().alphanum().min(3).max(30).required()

export const passwordSchema = Joi.string()
  .pattern(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)
  .min(8)
  .required()

const user = Joi.object({ username: usernameSchema, password: passwordSchema })

export default user
