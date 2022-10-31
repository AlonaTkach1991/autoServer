import { Router } from 'express'
import {
  createApplication,
  getAll,
  updateApplication,
  removeApplication,
} from '../controllers/application.js'

const router = new Router()

router.post('/', createApplication)

router.get('/', getAll)

router.put('/:id', updateApplication)

router.delete('/:id', removeApplication)

export default router
