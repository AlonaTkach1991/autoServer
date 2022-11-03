import { Router } from 'express'
import {
  createCredit,
  getAll,
  updateCredit,
  removeCredit,
} from '../controllers/credit.js'

const router = new Router()

router.post('/', createCredit)

router.get('/', getAll)

router.put('/:id', updateCredit)

router.delete('/:id', removeCredit)

export default router
