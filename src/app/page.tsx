"use client"

import { useEffect, useState } from 'react'
import ClientLayout from '@/components/ClientLayout'
import VideoBackgroundLoader from '@/components/Home/LogoLoader'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)
 const [isClient, setIsClient] = useState(false)

  // Ensure component only renders on client
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 6000) 

    return () => clearTimeout(timer) 
  }, [])

 useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <main>
      {showLoader ? <VideoBackgroundLoader /> : <ClientLayout />}
    </main>
  )
}
