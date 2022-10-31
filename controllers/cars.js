import Cars from '../models/Cars.js'
import Audi from '../models/Audi.js'
import User from '../models/User.js'

export const createCars = async (req, res) => {
  try {
    const {
      box,
      car,
      carcase,
      color,
      drive,
      image,
      miraleage,
      model,
      name,
      power,
      price,
      rudder,
      text,
      year,
      galery,
      idUser,
    } = req.body

    const newCars = new Cars({
      box,
      car,
      carcase,
      color,
      drive,
      image,
      model,
      name,
      rudder,
      text,
      year,
      power,
      price,
      galery,
      miraleage,
      idUser,
    })

    await newCars.save()

    await User.findByIdAndUpdate(idUser, {
      $push: { cars: newCars },
    })
    res.json({ newCars })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const createAudi = async (req, res) => {
  try {
    const {
      box,
      car,
      carcase,
      color,
      drive,
      image,
      miraleage,
      model,
      name,
      power,
      price,
      rudder,
      text,
      year
    } = req.body

    const newAudi = new Audi({
      box,
      car,
      carcase,
      color,
      drive,
      image,
      model,
      name,
      rudder,
      text,
      year,
      power,
      price,
      miraleage,
    })

    await newAudi.save()
    res.json({ newAudi })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const getAll = async (req, res) => {
  try {
    const cars = await Cars.find().sort('-createdAt')

    if (!cars) {
      return res.json({ message: 'Машин нет' })
    }

    res.json({ cars })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const removeCar = async (req, res) => {
  try {
    const car = await Cars.findByIdAndDelete(req.params.id)
    if (!car) return res.json({ message: 'Такого поста не существует' })

    await User.findByIdAndUpdate(req.userId, {
      $pull: { cars: req.params.id },
    })

    res.json({ message: 'Пост был удален.' })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const updateCar = async (req, res) => {
  try {
    const { price, id, miraleage } = req.body
    const car = await Cars.findById(id)
    if (price) {
      car.price = price
      await car.save()
    } else if (miraleage) {
      car.miraleage = miraleage
      await car.save()
    }
    res.json(car)
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const getAllAudi = async (req, res) => {
  try {
    const audi = await Audi.find().sort('-createdAt')

    if (!audi) {
      return res.json({ message: 'Машин нет' })
    }

    res.json({ audi })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}