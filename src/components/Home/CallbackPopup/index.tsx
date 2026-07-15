"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const API_URL = "https://crmapi.kommuno.com/v1/kcrm/clickToCallWithoutAgentLiveStatus"
const API_KEY = "5021f235256fe640eb28a870f21096d92a0273ffc5c883db80bdc4b5bbf8652d"
const SME_ID = 10003039 // TODO: replace with your actual smeId


type SubmitState = "idle" | "loading" | "success" | "error"

const CallbackPopup = () => {
  const [showImagePopup, setShowImagePopup] = useState(false)
  const [showFormModal, setShowFormModal] = useState(false)
  const [formData, setFormData] = useState({ name: "", mobile: "", authorized: false })
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setShowImagePopup(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const closeAll = () => {
    setShowImagePopup(false)
    setShowFormModal(false)
    setSubmitState("idle")
    setErrorMsg("")
    setFormData({ name: "", mobile: "", authorized: false })
  }

  const formatMobile = (mobile: string) => {
    const digits = mobile.replace(/\D/g, "")
    if (digits.startsWith("91") && digits.length === 12) return `+${digits}`
    if (digits.length === 10) return `+91${digits}`
    return `+${digits}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitState("loading")
    setErrorMsg("")

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: API_KEY,
        },
        body: JSON.stringify({
          smeId: SME_ID,
          customerNumber: formatMobile(formData.mobile),
        }),
      })

      const data = await res.json()

      if (data.status === 1 || data.status === 200) {
        setSubmitState("success")
      } else {
        setSubmitState("error")
        setErrorMsg(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      setSubmitState("error")
      setErrorMsg("Network error. Please check your connection and try again.")
    }
  }

  if (!showImagePopup && !showFormModal) return null

  return (
    <>
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
            <button
              onClick={closeAll}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="relative w-full">
              <Image
                src="/images/hero/initialformbg.jpeg"
                alt="Request a Call Back"
                width={1200}
                height={1500}
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
            </div>

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

            {submitState === "success" ? (
              <div className="text-center py-6 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Your Call is Scheduled!</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Thank you, <span className="font-semibold text-gray-700">{formData.name}</span>! You will receive a call from
                </p>
                <div className="bg-[#c8ac6e]/10 border border-[#c8ac6e]/30 rounded-xl px-5 py-3">
                  <p className="text-[#c8ac6e] font-bold text-lg tracking-wide">
                    +91 80-35013322
                  </p>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                  Please keep your phone reachable. Our expert will connect with you shortly to assist you further.
                </p>
              </div>
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ac6e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your 10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ac6e] focus:border-transparent"
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

                {submitState === "error" && (
                  <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg px-3 py-2">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full bg-[#c8ac6e] hover:bg-[#b89a5a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2"
                >
                  {submitState === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Initiating Call...
                    </>
                  ) : (
                    "Request Call Back"
                  )}
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
