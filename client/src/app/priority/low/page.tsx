import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

export default function Low() {
  return <ReusablePriorityPage priority={Priority.Low} />
}
