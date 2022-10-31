import { Router } from 'express'
import {
  createCars,
  getAll,
  removeCar,
  getAllAudi,
  createAudi,
  updateCar,
} from '../controllers/cars.js'

const router = new Router()

router.post('/', createCars)

router.get('/', getAll)

router.post('/audi', createAudi)

router.get('/audi', getAllAudi)

router.put('/:id', updateCar)

router.delete('/:id', removeCar)

export default router
