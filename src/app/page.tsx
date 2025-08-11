"use client"

import { useEffect, useState } from 'react'
import ClientLayout from '@/components/ClientLayout'
import VideoBackgroundLoader from '@/components/Home/LogoLoader'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 5000) 

    return () => clearTimeout(timer) 
  }, [])

  return (
    <main>
      {showLoader ? <VideoBackgroundLoader /> : <ClientLayout />}
    </main>
  )
}
