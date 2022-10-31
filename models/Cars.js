import mongoose from 'mongoose'

const CarsSchema = new mongoose.Schema(
  {
    box: { type: String, required: true },
    car: { type: String, required: true },
    carcase: { type: String, required: true },
    color: { type: String, required: true },
    drive: { type: String, required: true },
    image: { type: String, required: true },
    miraleage: { type: Number, default: 0 },
    model: { type: String, required: true },
    name: { type: String, required: true },
    rudder: { type: String, required: true },
    text: { type: String, required: true },
    year: { type: Number, default: 2000 },
    power: { type: Number, default: 2000 },
    price: { type: Number, default: 2000 },
    galery: { type: [String], default: [] },
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)
export default mongoose.model('Cars', CarsSchema)
