import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    comment: { type: String },
  },
  { timestamps: true }
)

export default mongoose.model('Review', ReviewSchema)
