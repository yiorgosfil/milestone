import { Router } from 'express'
import { getUser, getUsers, createUser } from '../controllers/userController'

const router = Router()

router.get('/', getUsers)
router.get('/:cognitoId', getUser)
router.post('/', createUser) 

export default router
