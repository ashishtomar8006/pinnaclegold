"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("username") || ""),
      phone: String(formData.get("mobile") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 text-black">
      {/* ... your existing UI above ... */}

      <div className="border border-black/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          {/* left panel unchanged */}
          <div className="relative w-fit">
            <Image
              src={"/images/contactUs/contactUs.jpg"}
              alt="wall"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized={true}
            />
            {/* ... left content unchanged ... */}
          </div>

          <div className="flex-1/2">
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    placeholder="Name*"
                    required
                    className="px-6 py-3.5 border border-black/10 rounded-full outline-primary focus:outline w-full"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="Phone number*"
                    required
                    className="px-6 py-3.5 border border-black/10 rounded-full outline-primary focus:outline w-full"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email address*"
                  required
                  className="px-6 py-3.5 border border-black/10 rounded-full outline-primary focus:outline"
                />

                <textarea
                  rows={8}
                  name="message"
                  id="message"
                  placeholder="Write here your message"
                  required
                  className="px-6 py-3.5 border border-black/10 rounded-2xl outline-primary focus:outline"
                />

                {status === "success" && (
                  <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                    Message sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}

                <button
                  disabled={loading}
                  className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
