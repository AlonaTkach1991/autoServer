import Application from '../models/Application.js'

export const createApplication = async (req, res) => {
  try {
    const { phone, name } = req.body

    const newApplication = new Application({
      phone,
      name,
    })

    await newApplication.save()

    res.json({ newApplication })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const getAll = async (req, res) => {
  try {
    const application = await Application.find().sort('-createdAt')

    if (!application) {
      return res.json({ message: 'Заявок нет' })
    }

    res.json({ application })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const updateApplication = async (req, res) => {
  try {
    console.log(req.body)
    const { comment, id } = req.body
    const application = await Application.findById(id)

    application.comment = comment
    console.log(application)
    await application.save()

    res.json(application)
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const removeApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id)
    if (!application) return res.json({ message: 'Такой заявки не существует' })

    res.json({ message: 'Заявка была удален.' })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}
