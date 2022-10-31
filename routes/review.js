import { Router } from 'express'
import {
  createReview,
  getAll,
  updateReviews,
  removeReviews,
} from '../controllers/review.js'

const router = new Router()

router.post('/', createReview)

router.get('/', getAll)

router.put('/:id', updateReviews)

router.delete('/:id', removeReviews)

export default router
