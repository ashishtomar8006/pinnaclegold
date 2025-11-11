import React from "react";
import Image from "next/image";
import { FaBalanceScale, FaStar, FaSmileBeam, FaLightbulb, FaLandmark, FaLeaf } from "react-icons/fa";

// Vision Content
const visionStatement = `
To be India’s most admired creator of legacy-defining landmarks that blend timeless elegance with future-ready innovation.
`;

const visionBy2035 = `
By 2035, we envision STJ Group as the gold standard of trust, where every jewellery piece becomes an heirloom and every built space becomes a heritage. We see skylines transformed by our iconic towers, cities enriched by sustainable ecosystems, and lives elevated by experiences that money alone cannot buy.
From the Tricity to every aspiring metropolis, we are committed to delivering 20 million square feet of extraordinary living, working, and leisure environments that inspire generations and stand as proud symbols of India’s rising prestige.
The Pinnacle is just the beginning. We are not building structures — we are crafting tomorrow’s legends.
`;

// Values Data
const values = [
  {
    title: "Integrity First",
    description:
      "We keep promises — to our customers, partners, and each other. Transparency is non-negotiable; trust is our true currency.",
    icon: <FaBalanceScale className="text-blue-700" />,
    bg: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-900",
  },
  {
    title: "Excellence in Every Detail",
    description:
      "From the sparkle of a diamond to the strength of a foundation vetted by IIT Roorkee, we settle for nothing less than perfection.",
    icon: <FaStar className="text-blue-700" />,
    bg: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-900",
  },
  {
    title: "Customer Delight, Always",
    description:
      "Every interaction is personal, every concern is ours. We don’t just sell homes or jewellery — we create lifelong relationships.",
    icon: <FaSmileBeam className="text-blue-700" />,
    bg: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-900",
  },
  {
    title: "Innovation with Soul",
    description:
      "We embrace cutting-edge technology and sustainable practices, but never at the cost of warmth, aesthetics, or human connection.",
    icon: <FaLightbulb className="text-blue-700" />,
    bg: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-900",
  },
  {
    title: "Legacy over Profit",
    description:
      "Short-term gains never overshadow long-term impact. We build to last, design to inspire, and grow to give back.",
    icon: <FaLandmark className="text-blue-700" />,
    bg: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-900",
  },
  {
    title: "Respect for People & Planet",
    description:
      "Diversity powers our teams, fairness defines our dealings, and green living is woven into every blueprint.",
    icon: <FaLeaf className="text-blue-700" />,
    bg: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-900",
  },
];

export default function VisionValuesPage() {
  return (
    <div className="bg-gray-50 pt-24">
      {/* Hero Section */}
      {/* <section
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/images/hero/banner1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}


<section
        className="relative bg-cover bg-center py-26 px-4 sm:px-8 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/hero/banner1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold mb-6 leading-tight tracking-wide">
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Crafting Tomorrow’s Legends — One Legacy at a Time
          </p>
          <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 border border-white">
            <span className="text-lg font-medium">2035 | 20M Sq. Ft. | India’s Gold Standard</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20 px-6 md:px-12 bg-white relative">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            OUR PROMISE TO INDIA
          </span>
          <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed italic mb-8">
            “{visionStatement}”
          </blockquote>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto prose prose-lg text-gray-800 leading-relaxed space-y-6">
          {visionBy2035.split("\n").map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg max-w-md text-center">
            <div className="text-5xl font-bold text-blue-700 mb-2">2035</div>
            <div className="text-gray-700 font-medium">Our Defining Horizon</div>
            <div className="mt-3 text-sm text-gray-600">
              20 Million Sq. Ft. | Iconic Skylines | Sustainable Ecosystems
            </div>
          </div>
        </div>
      </section>

      {/* Divider with Pattern */}
      <div className="h-16 bg-gradient-to-b from-white to-gray-100 relative">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#f1f5f9"
            d="M0,32L48,48C96,64,192,96,288,90.7C384,85,480,43,576,37.3C672,32,768,64,864,85.3C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
          ></path>
        </svg>
      </div>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are not posters on a wall — they are the heartbeat of every decision we make.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, idx) => (
        <div
          key={idx}
          className={`group p-8 rounded-3xl bg-gradient-to-br ${value.bg} border-2 ${value.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm`}
        >
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {value.icon}
          </div>
          <h3 className={`text-2xl font-bold mb-3 ${value.textColor}`}>
            {value.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{value.description}</p>
        </div>
      ))}
        </div>
      </section>

      {/* Closing Banner */}
      <section
        className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero/banner1.jpg"
            alt="Background texture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            STJ Group – Where Trust Meets Timeless Luxury
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            We don’t follow trends. We set benchmarks. We don’t chase growth. We cultivate legacies.
          </p>
          <div className="mt-10 inline-block border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-900 transition-colors duration-300 cursor-pointer">
            <span className="font-semibold text-lg">Explore Our Projects</span>
          </div>
        </div>
      </section>
    </div>
  );
}