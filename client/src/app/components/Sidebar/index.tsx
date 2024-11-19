'use client'

import React from 'react'
import Image from 'next/image';
import { LockIcon } from 'lucide-react';

export default function Sidebar() {
  const [showProjects, setShowProjects] = React.useState(true)
  const [showPriority, setShowPriority] = React.useState(true)

  const sidebarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
    w-64
  `;

  return (
    <div className={sidebarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            MILESTONE
          </div>
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image
            src='./logo.svg'
            alt="Logo"
            width={40}
            height={40}
          />
          <div>
            <h3 className='text-md font-bold  tracking-widest dark:text-gray-200'>
              {/* TODO: Make this dynamic */}
              TEAM GEORGE
            </h3>
            <div className='mt-1 flex items-start gap-2'>
              <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400' />
              <p className='text-xs text-gray-500'>Private</p>
            </div>
          </div>
        </div>
        {/* TODO: Navbar Links */}
      </div>
    </div>
  )
}
