import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

export default function Medium() {
  return <ReusablePriorityPage priority={Priority.Medium} />
}

