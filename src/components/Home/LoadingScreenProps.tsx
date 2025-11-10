"use client"
import { useState, useEffect } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Home, Building, MapPin, Star, Sparkles } from "lucide-react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showEnterButton, setShowEnterButton] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Ensure component only renders on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const loadingTexts = [
    "Discovering luxury properties...",
    "Curating premium locations...",
    "Preparing your dream home experience...",
    "Welcome to Epitome of Prestige",
  ]

  const backgroundImages = [
    "/images/hero/banner1.jpg",
    "/images/hero/banner2.jpg",
    "/images/hero/banner3.jpg",
    "/images/hero/banner4.jpg",
    "/images/hero/banner5.jpg",
  ]



  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setShowEnterButton(true), 800)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    return () => clearInterval(interval)
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 2000)

    return () => clearInterval(textInterval)
  }, [isClient, loadingTexts.length])

  useEffect(() => {
    if (!isClient) return

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 3000)

    return () => clearInterval(imageInterval)
  }, [isClient, backgroundImages.length])

  // Don't render anything on server
  if (!isClient) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 1.2, ease: "easeInOut" as const },
    },
  }

  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 100,
      rotateX: 90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 25px 50px rgba(7, 190, 138, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  }

  

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Images with Parallax Effect */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.1,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                unoptimized
              />
            </motion.div>
          ))}

          {/* Animated Overlay */}
          <motion.div
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

  
        {/* Main Content */}
        <div className="absolute bottom-16 z-10 text-center px-8 w-[500px]">
          <AnimatePresence>
            {showEnterButton && (
              <motion.div className="space-y-6">
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={onComplete}
                  className="group relative px-6 py-2 cursor-pointer border-white text-white font-bold rounded-full text-xl shadow-2xl border overflow-hidden backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-primary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  
                  <span className="relative flex items-center gap-4 cursor-pointer">
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="cursor-pointer"
                    >
                      Exprience Website
                    </motion.span>
                    <motion.div
                      animate={{ x: [0, 8, 0], rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ChevronRight size={12} />
                    </motion.div>
                  </span>

                  {/* Multiple Shine Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: [-200, 400] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
