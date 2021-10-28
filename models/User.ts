import { Schema, model, models } from 'mongoose'

export interface UserModel {
  username: string
  hash?: string
  token?: string
  id?: string
  tokens?: string[]
  urls?: string[]
}

const UserSchema = new Schema<UserModel>({
  username: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  tokens: [{ type: String, required: true }],
  urls: [{ type: String, ref: 'Url' }],
})

UserSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject.hash
    delete returnedObject.tokens
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const User = models.User || model('User', UserSchema)

export default User
