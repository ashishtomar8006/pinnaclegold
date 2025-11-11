"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/api/testimonial";

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="bg-dark relative overflow-hidden" id="testimonial">
      <div className="absolute right-0">
        <Image
          src="/images/testimonial/Vector.png"
          alt="decorative"
          width={700}
          height={1039}
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div>
          <h2 className="lg:text-52 text-40 font-medium text-white flex items-center gap-4 mb-6">
            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />   
            The Architect
          </h2>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="mt-9">
                <div className="lg:flex items-center gap-12">
                  <div className="w-full lg:w-3/5 space-y-4 pr-8">
                    <div>
                      <Icon icon="ph:house-simple" width={32} height={32} className="text-primary" />
                    </div>
                    <h4 className="text-gray-400 whitespace-pre-line leading-relaxed">{item.review}</h4>

                    <p className="text-primary font-semibold mt-4">{item.name}</p>
                    <p className="text-primary font-semibold mt-4">{item.position}</p>
                  </div>

                  <div className="w-full lg:w-3/5 flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="rounded-2xl shadow-lg"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
