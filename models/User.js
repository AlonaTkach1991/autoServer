import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cars: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cars',
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
