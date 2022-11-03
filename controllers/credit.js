import Credit from '../models/Credit.js'

export const createCredit = async (req, res) => {
  try {
    const { phone, name, model, time, payment, brand } = req.body

    const newCredit = new Credit({
      phone,
      name,
      model,
      time,
      payment,
      brand,
    })

    await newCredit.save()

    res.json({ newCredit })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const getAll = async (req, res) => {
  try {
    const credit = await Credit.find().sort('-createdAt')

    if (!credit) {
      return res.json({ message: 'Заявок нет' })
    }

    res.json({ credit })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const updateCredit = async (req, res) => {
  try {
    console.log(req.body)
    const { comment, id } = req.body
    const credit = await Credit.findById(id)

    credit.comment = comment
    console.log(credit)
    await credit.save()

    res.json(credit)
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const removeCredit = async (req, res) => {
  try {
    const credit = await Credit.findByIdAndDelete(req.params.id)
    if (!credit) return res.json({ message: 'Такой заявки не существует' })

    res.json({ message: 'Заявка была удален.' })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}
