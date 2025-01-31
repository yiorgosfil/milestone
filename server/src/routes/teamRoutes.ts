import { Router } from 'exporess'
import { getTeams } from '../controllers/teamController'

const router = Router()

router.get('/', getTeams)

export default router
