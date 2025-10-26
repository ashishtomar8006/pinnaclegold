import type React from "react"
import Link from "next/link"

const GetInTouch: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden lg:py-64 md:py-28 py-10">
          {" "}
          {/* Moved padding to parent to define height */}
          <video
            className="w-full h-full absolute inset-0 object-cover" // Use inset-0 to cover parent
            autoPlay
            loop
            muted
            playsInline
            aria-label="Video background showing luxurious real estate"
          >
            <source src="/videos/slidervideo2.mp4" type="video/mp4" />
            {"Your browser does not support the video tag."}
          </video>
          <div className="bg-black/30 absolute inset-0 flex items-center justify-center">
            {" "}
            {/* Overlay covers parent and centers content */}
            <div className="flex flex-col items-center gap-8 z-10">
              {" "}
              {/* Added z-10 to ensure text is above overlay */}
              {/* <h2 className="text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium">
                {"Enter a realm where exquisite design and timeless luxury come together."}
              </h2>
              <Link
                href="#"
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300"
              >
                Get In Touch
              </Link> */}
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              {"GET A FREE PROPERTY VALUATION—SELL YOUR HOME WITH CONFIDENCE!"}
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              {"BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!"}
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              {"GET A FREE PROPERTY VALUATION—SELL YOUR HOME WITH CONFIDENCE!"}
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              {"BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS AT GREAT PRICES!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
