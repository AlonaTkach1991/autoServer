import mongoose from 'mongoose'

const CreditSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    payment: {
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

export default mongoose.model('Credit', CreditSchema)
