"use client"

import { use, useEffect, useState } from 'react'
import ClientLayout from '@/components/ClientLayout'
import VideoBackgroundLoader from '@/components/Home/LogoLoader'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  // useEffect(() => {
  //   router.push('/home')
  // }, [])

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
