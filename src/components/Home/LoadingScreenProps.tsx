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

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 },
    { left: 25, top: 15 },
    { left: 40, top: 30 },
    { left: 55, top: 10 },
    { left: 70, top: 25 },
    { left: 85, top: 35 },
    { left: 15, top: 50 },
    { left: 30, top: 60 },
    { left: 45, top: 45 },
    { left: 60, top: 65 },
    { left: 75, top: 55 },
    { left: 90, top: 70 },
    { left: 20, top: 80 },
    { left: 35, top: 85 },
    { left: 50, top: 75 },
    { left: 65, top: 90 },
    { left: 80, top: 85 },
    { left: 95, top: 95 },
    { left: 5, top: 40 },
    { left: 12, top: 75 },
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

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  const floatingElements = [
    { Icon: Home, delay: 0.5, x: -120, y: -80, size: 42 },
    { Icon: Building, delay: 0.8, x: 150, y: -100, size: 38 },
    { Icon: MapPin, delay: 1.1, x: -100, y: 80, size: 34 },
    { Icon: Star, delay: 1.4, x: 120, y: 100, size: 30 },
    { Icon: Sparkles, delay: 1.7, x: -150, y: 0, size: 36 },
  ]

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

        {/* Animated Particles with Fixed Positions */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((position, i) => (
            <motion.div
              key={i}
              variants={particleVariants}
              animate="animate"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${(i * 0.15) % 3}s`,
              }}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            />
          ))}
        </div>

        {/* Floating Property Icons */}
        {floatingElements.map(({ Icon, delay, x, y, size }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360],
              x: [0, x * 0.5, x, x * 0.5, 0],
              y: [0, y * 0.5, y, y * 0.5, 0],
            }}
            transition={{
              opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              x: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              y: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              delay,
            }}
            className="absolute text-white/40"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="absolute bottom-16 z-10 text-center px-8 w-[500px]">
          {/* Enhanced Progress Bar */}
          {/* {!showEnterButton && ( */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="mb-12"
            >
              <div className="w-full mx-auto">
                <div className="flex justify-between text-sm text-gray-300 mb-4">
                  <span className="font-medium">Loading Experience</span>
                  <motion.span
                    key={loadingProgress}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="font-bold text-primary"
                  >
                    {Math.round(loadingProgress)}%
                  </motion.span>
                </div>
                <div className="relative h-3 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: [-100, 300] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          {/* )} */}

          {/* Enhanced Enter Button */}
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
                  className="group relative px-6 py-2 border-white text-white font-bold rounded-full text-xl shadow-2xl border overflow-hidden backdrop-blur-sm"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-primary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Button Content */}
                  <span className="relative flex items-center gap-4 cursor-pointer">
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="cursor-pointer"
                    >
                      Enter Website
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
