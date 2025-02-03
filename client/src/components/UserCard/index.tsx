import { User } from '@/state/api'
import Image from 'next/image'

type Props = {
  user: User
}

export default function UserCard({ user}: Props) {
  return (
    <div className='flex items-center rounded border p-4 shadow'>
      {user.profilePictureUrl && (
        <Image
          src={`todo/`}
          alt='User profile picture'
          width={32}
          height={32}
          className='rounded-full'
        />
      )}
      <div>
        <h3>{user.userName}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  )
}
