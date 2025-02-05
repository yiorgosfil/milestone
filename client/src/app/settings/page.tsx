import Header from '@/components/Header'

export default function Settings() {
  const userSettings = {
    userName: 'johndoe',
    email: 'john.doe@example.com',
    teamName: 'Team Name',
    roleName: 'Role'
  }

  const labelStyles = 'block text-sm font-medium dark:text-white'
  const textStyles = 'mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white'

  return (
    <div className='p-8'>
      <Header name='Settings' />
      <div className='space-y-4'>
        <div>
          <label className={labelStyles}>Username</label>
          <div className={textStyles}>{userSettings.userName}</div>
        </div>
        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{userSettings.email}</div>
        </div>
        <div>
          <label className={labelStyles}>Team</label>
          <div className={textStyles}>{userSettings.teamName}</div>
        </div>
        <div>
          <label className={labelStyles}>Role</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  )
}

/*
TODO: Improvements:
- Make it dynamic: Instead of hardcoding userSettings, fetch user settings from an API or global state.
- Add edit functionality: Allow users to modify their settings by using an <input> or a <form>.
- Improve UX: Add a "Change Password" or "Update Settings" button.
*/
