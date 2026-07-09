"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const CallbackPopup = () => {
  const [showImagePopup, setShowImagePopup] = useState(false)
  const [showFormModal, setShowFormModal] = useState(false)
  const [formData, setFormData] = useState({ name: "", mobile: "", authorized: false })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowImagePopup(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const closeAll = () => {
    setShowImagePopup(false)
    setShowFormModal(false)
    setSubmitted(false)
    setFormData({ name: "", mobile: "", authorized: false })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(closeAll, 2000)
  }

  if (!showImagePopup && !showFormModal) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={closeAll}
      >
        {/* Image popup */}
        {showImagePopup && !showFormModal && (
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeAll}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative w-full">
              <Image
                src="/images/hero/initialformbg.jpeg"
                alt="Request a Call Back"
                width={1200}
                height={1500}
                className="w-full h-auto block"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
            </div>

            {/* Request a Call Back button — top center */}
            <button
              onClick={() => setShowFormModal(true)}
              className="absolute top-5 left-1/2 -translate-x-1/2 bg-[#c8ac6e] hover:bg-[#b89a5a] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg transition-colors whitespace-nowrap z-10"
            >
              Request a Call Back
            </button>
          </div>
        )}

        {/* Form modal */}
        {showFormModal && (
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAll}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-[#c8ac6e] mb-1 text-center">Request a Call Back</h2>
            <p className="text-gray-500 text-sm text-center mb-6">Our team will reach out to you shortly.</p>

            {submitted ? (
              <p className="text-center text-green-600 font-medium py-8">
                Thank you! We will contact you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8ac6e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8ac6e] focus:border-transparent"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.authorized}
                    onChange={(e) => setFormData({ ...formData, authorized: e.target.checked })}
                    className="mt-0.5 accent-[#c8ac6e] w-4 h-4 shrink-0"
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    I authorize you to contact me via Call / SMS / WhatsApp regarding this inquiry.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#c8ac6e] hover:bg-[#b89a5a] text-white font-semibold py-3 rounded-lg transition-colors mt-2"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default CallbackPopup
