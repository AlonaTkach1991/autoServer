import Review from '../models/Review.js'

export const createReview = async (req, res) => {
  try {
    const { phone, name, text } = req.body

    const newReview = new Review({
      phone,
      name,
      text,
    })

    await newReview.save()

    res.json({ newReview })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const getAll = async (req, res) => {
  try {
    const reviews = await Review.find().sort('-createdAt')

    if (!reviews) {
      return res.json({ message: 'Отзывов нет' })
    }

    res.json({ reviews })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const updateReviews = async (req, res) => {
  try {
    console.log(req.body)
    const { comment, id } = req.body
    const review = await Review.findById(id)

    review.comment = comment
    console.log(review)
    await review.save()

    res.json(review)
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}

export const removeReviews = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id)
    if (!review) return res.json({ message: 'Такого поста не существует' })

    res.json({ message: 'Пост был удален.' })
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}
