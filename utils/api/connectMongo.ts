import { connect } from 'mongoose'
import 'models/User'
import 'models/Url'

const connectMongo = () => connect(process.env.MONGODB_URI as string)

export default connectMongo
