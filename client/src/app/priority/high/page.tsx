import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'

export default function High() {
  return <ReusablePriorityPage priority={Priority.High} />
}
