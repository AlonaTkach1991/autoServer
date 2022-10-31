import mongoose from 'mongoose'

const ApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    comment: { type: String },
  },
  { timestamps: true }
)

export default mongoose.model('Application', ApplicationSchema)
