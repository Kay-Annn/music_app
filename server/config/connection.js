import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.DB_CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default mongoose.connection

