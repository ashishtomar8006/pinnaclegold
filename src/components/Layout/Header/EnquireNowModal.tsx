"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

type EnquireNowModalProps = {
  open: boolean;
  onClose: () => void;
  verticalOptions?: { label: string; value: string }[];
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EnquireNowModal({
  open,
  onClose,
  verticalOptions = [
    { label: "Mohali Citi Centre", value: "Mohali Citi Centre" },
    { label: "Genesis Heights", value: "Genesis Heights" },
    { label: "Saraf The Jeweller", value: "Saraf The Jeweller" },
    { label: "Sunaar The Jeweller", value: "Sunaar The Jeweller" },
    { label: "Bazzar", value: "Bazzar" },
  ],
}: EnquireNowModalProps) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    vertical: verticalOptions?.[0]?.value || "",
    message: "",
  });

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (form.email.trim() && !emailRegex.test(form.email.trim()))
      e.email = "Please enter a valid email";
    if (!form.vertical) e.vertical = "Please select a vertical";
    return e;
  }, [form]);

  const canSubmit = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const resetForm = () => {
    setForm({
      fullName: "",
      phone: "",
      email: "",
      vertical: verticalOptions?.[0]?.value || "",
      message: "",
    });
  };

  // Close on ESC + lock body scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!canSubmit) {
      toast.error("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      // ✅ Replace with your API endpoint
      // await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(form) })

      // Demo delay
      await new Promise((r) => setTimeout(r, 700));

      toast.success("Thanks! We’ll contact you shortly.");
      resetForm();
      onClose();
    } catch (e) {
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay */}
      <div
        className="absolute cursor-pointer inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative px-6 py-5 bg-gradient-to-r from-[#c79a3a] to-[#a77f2a] text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold tracking-wide">Enquire Now</h2>
                <p className="text-white/90 text-sm mt-1">
                  Share your details and we’ll get back to you.
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full z-10 cursor-pointer p-2 hover:bg-white/15 transition"
                aria-label="Close"
              >
                <Icon icon="ph:x" width={22} height={22} />
              </button>
            </div>

            {/* decorative */}
            <div className="absolute cursor-pointer -right-10 -top-10 h-28 w-28 rounded-full bg-white/15" />
            <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-white/10" />
          </div>

          {/* Body */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon icon="ph:user" width={18} height={18} />
                  </span>
                  <input
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className={`w-full rounded-xl border px-10 py-3 text-sm outline-none transition
                      ${errors.fullName ? "border-red-300" : "border-gray-200 focus:border-[#c79a3a]"}`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon icon="ph:phone" width={18} height={18} />
                  </span>
                  <input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`w-full rounded-xl border px-10 py-3 text-sm outline-none transition
                      ${errors.phone ? "border-red-300" : "border-gray-200 focus:border-[#c79a3a]"}`}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email (optional)
                </label>
                <div className="mt-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon icon="ph:envelope" width={18} height={18} />
                  </span>
                  <input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full rounded-xl border px-10 py-3 text-sm outline-none transition
                      ${errors.email ? "border-red-300" : "border-gray-200 focus:border-[#c79a3a]"}`}
                    placeholder="Enter email address"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Vertical */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Interested In <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon icon="ph:buildings" width={18} height={18} />
                  </span>
                  <select
                    value={form.vertical}
                    onChange={(e) => handleChange("vertical", e.target.value)}
                    className={`w-full appearance-none rounded-xl border px-10 py-3 text-sm outline-none transition
                      ${errors.vertical ? "border-red-300" : "border-gray-200 focus:border-[#c79a3a]"}`}
                  >
                    {verticalOptions.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon icon="ph:caret-down" width={18} height={18} />
                  </span>
                </div>
                {errors.vertical && (
                  <p className="text-xs text-red-600 mt-1">{errors.vertical}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">
                Message (optional)
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#c79a3a] transition min-h-[110px] resize-none"
                placeholder="Tell us what you’re looking for..."
              />
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <Icon icon="ph:shield-check" width={16} height={16} />
                We respect your privacy. No spam.
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                  disabled={loading}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading || !canSubmit}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition shadow-md
                    ${loading || !canSubmit
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-[#4b4f54] text-white hover:bg-[#3a3e42]"}`}
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
