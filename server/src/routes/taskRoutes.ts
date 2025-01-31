import { Router } from 'express'
import {
  createTask,
  getTasks,
  getUserTasks,
  updateUserTasks,
  updateTaskStatus
} from '../controllers/taskController'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
router.patch('/:taskId/status', updateTaskStatus)
router.patch('user/:userId/:taskId', updateUserTasks)
router.get('/user/:userId', getUserTasks)

export default router
