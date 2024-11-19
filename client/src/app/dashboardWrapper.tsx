'use client'

import React, { useEffect } from 'react'
import Navbar from "@/app/components/Navbar";
import Sidebar from '@/app/components/Sidebar'
import StoreProvider, { useAppSelector } from "./redux";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )
  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <Sidebar />
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? '' : 'md:pl-64'}`}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default function DashboardWrapper({ children }: { chidren: React.ReactNode }) {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}
