import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

export default function Urgent() {
  return <ReusablePriorityPage priority={Priority.Backlog} />
}
