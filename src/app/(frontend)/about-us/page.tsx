import React from "react";
import Image from "next/image";

const impactStats = [
  { value: "14+", label: "Landmark Projects" },
  { value: "2.5M+", label: "Sq. Ft. Delivered" },
  { value: "6M+", label: "Sq. Ft. Under Planning" },
];

const features = [
  "Rising 35 majestic storeys in Sector 83A, IT City Mohali",
  "Designed by Ar. Hafeez Contractor & Interiors by Zafar Chaudhary",
  "Triple-height entrance lobby, expansive sky residences",
  "Structural designs vetted by IIT Roorkee & Seismic Zone IV+ compliance",
  "1 lakh sq. ft. clubhouse – largest in region",
  "Infinity-edge sky pool & Sky Walk at 400+ feet",
  "7-star concierge, private theatres, wellness spa, celestial lounge",
  "Only 3 minutes from Chandigarh International Airport",
  "Surrounded by Plaksha University, Amity University, Infosys & IT City ecosystem",
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      {/* Hero Banner with Background Image */}
      <section
        className="relative bg-cover bg-center py-24 px-4 sm:px-8 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/hero/banner1.jpg')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            The Pinnacle – By STJ Group
          </h1>
          <h2 className="text-2xl font-medium text-yellow-300 mb-6 tracking-wide uppercase">
            THE MOST TRUSTED BUILDER OF TRICITY
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            In the world of real estate, trust and excellence are the
            cornerstones of every project's success.
            <br />
            At THE PINNACLE, these qualities go hand in hand — brought to life
            by the legacy of STJ Group.
          </p>
        </div>
      </section>

      {/* Impact Stats Section - Animated Cards */}
      <section className="max-w-5xl mx-auto pt-6 px-4 sm:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Impact, In Numbers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <span className="text-5xl md:text-6xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.value}
              </span>
              <span className="text-gray-700 text-lg font-semibold text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Legacy with Side Image */}
      <section className="max-w-7xl  mx-auto px-4 sm:px-8 !pb-16 !pt-0 grid md:grid-cols-1 gap-10 items-center">
        <div className="bg-white rounded-3xl overflow-hidden md:flex">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Legacy Built on Trust
            </h3>
            <p className="text-lg text-gray-800 mb-5 leading-relaxed">
              STJ Group has earned a stellar reputation for impeccable
              construction and the unwavering delivery of promises. Their
              indelible mark on the commercial landscape shines through Mohali
              Citi Centre, setting a new standard for excellence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Today, they embark on a journey to redefine residential living
              with THE PINNACLE, where luxury, comfort, and sophistication
              converge to create an unparalleled living experience.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary px-6 py-5 rounded-lg text-gray-800 shadow-md">
              <p className="italic">
                In 2018, we diversified into real estate with Mohali Citi
                Centre-1 in Aerocity, Mohali — a project that set new benchmarks
                in design and delivery. Today, operating across the Tricity
                region, STJ Group symbolizes uncompromising quality in both
                jewellery retail and real estate, driven by relationships built
                on personalized care, transparency, and enduring value.
              </p>
            </div>
          </div>

          <div
            className="md:w-1/2 bg-cover bg-center h-96 md:h-auto"
            style={{ backgroundImage: `url('/images/hero/banner1.jpg')` }}
          ></div>
        </div>
      </section>

      {/* Prestige Statement with Split Background */}
      <section className="pb-6 px-4 sm:px-8 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">
            <div
              className="md:w-1/2 bg-cover bg-center h-96 md:h-auto"
              style={{ backgroundImage: `url('/images/hero/banner1.jpg')` }}
            ></div>

            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                The Pinnacle – Where Aspiration Meets Altitude
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Rising 35 majestic storeys in Sector 83A, IT City Mohali, The
                Pinnacle is not just a residence — it is the new definition of
                prestige in the Tricity region.
              </p>
              <p className="text-lg text-gray-700">
                Designed by legendary Ar. Hafeez Contractor and enriched with
                interiors by Zafar Chaudhary, every corner reflects
                architectural brilliance and refined luxury. From the
                breathtaking triple-height entrance lobby to expansive sky
                residences, perfection is in every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Icons/Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-primary mb-12">
          Why The Pinnacle is Extraordinary
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold mt-1 flex-shrink-0">
                  •
                </span>
                <p className="text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Gallery Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Tricity’s grandest lifestyle destination
        </h3>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/hero/banner2.jpg"
              alt="Luxury Clubhouse Interior"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-bold text-gray-900">Grand Clubhouse</h4>
              <p className="text-sm text-gray-600">
                1 lakh sq. ft. clubhouse – the largest and first of its kind in
                the region{" "}
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/hero/banner3.jpg"
              alt="Infinity Sky Pool"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-bold text-gray-900">Sky Pool & Lounge</h4>
              <p className="text-sm text-gray-600">
                Infinity-edge sky pool & Sky Walk at 400+ feet
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/hero/banner1.jpg"
              alt="Prime Location Map"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-bold text-gray-900">Unbeatable Location</h4>
              <p className="text-sm text-gray-600">
                7-star concierge, private theatres, wellness spa, and celestial
                lounge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement with Gradient Background */}
      <section className="py-16 px-4 sm:px-8">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #1e3a8a, #3b82f6)`,
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/hero/banner1.jpg"
              alt="Background texture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              At The Pinnacle, luxury is not an address.
            </h3>
            <p className="text-xl md:text-2xl mb-8 font-light">
              It is a daily celebration of the life you’ve always dreamed of.
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-yellow-300">
              The Pinnacle by STJ Group — Rise to the Extraordinary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
