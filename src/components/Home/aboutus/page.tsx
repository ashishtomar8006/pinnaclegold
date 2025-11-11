"use client";

import { ArrowRight, Phone, Check } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white p-8 py-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
    
            <div className="relative mb-8">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/banner3.jpg"
                  alt="Modern living room interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second image container */}
            <div className="relative ml-16">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/banner2.jpg"
                  alt="Modern living room with wooden accents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* About Us link */}
            <div className="flex items-center text-sage-600 hover:text-sage-700 transition-colors cursor-pointer">
              <ArrowRight className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">About Us</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-4xl font-bold text-[#c8ac6e] leading-tight">
              The Pinnacle. <br />
                <span className="text-sage-600"> Built for POWER & PRESTIGE

                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
              The address on your business card can change everything. Rising majestically in Sector 83A, IT City Mohali, The Pinnacle by STJ Group is not just an address—it’s a crown. Designed for visionaries, legacy-builders, and empire-makers, The Pinnacle delivers world-class infrastructure, breathtaking amenities, and an environment that fuels ambition as powerfully as it inspires awe.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-sage-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-sage-600" />
                </div>
                <span className="text-gray-700 font-medium">
                Architectural mastery by Hafeez Contractor
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-sage-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-sage-600" />
                </div>
                <span className="text-gray-700 font-medium">
                Every residence, every detail—tailored to your legacy
                </span>
              </div>
              <button className="bg-sage-600 text-[#c8ac6e] cursor-pointer px-8 py-4 rounded-lg hover:bg-sage-700 transition-colors flex items-center space-x-2 group">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
