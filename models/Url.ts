import { Schema, model, models } from 'mongoose'

export interface UrlModel {
  url: string
  shortUrl: string
  user: string
  visits: number
  _id: string
}

const urlSchema = new Schema<UrlModel>({
  url: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  visits: {
    type: Number,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
})

urlSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.shortUrl = returnedObject._id
    delete returnedObject._id
    delete returnedObject.user
    delete returnedObject.__v
  },
})

const Url = models.Url || model('Url', urlSchema)

export default Url
