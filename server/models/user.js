import { Schema, model, Types } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'please provide a unique username'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Please enter a valid email address'],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
    },
    
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
)


const User = model('user', userSchema)

export default User;
