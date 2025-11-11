import { Testimonial } from "@/types/testimonial";
import { now } from "next-auth/client/_utils";

export const testimonials: Testimonial[] = [
  {
    image: "/images/users/hafez-img.png",
    name: "Hafeez",
    review: `Hafeez Contractor, a visionary architect revered globally, has transformed India’s
    skylines with his pioneering designs and refined mastery. He now brings this
    legendary expertise to The Pinnacle, setting a new benchmark for luxury living in
    Mohali. \n“With acclaimed projects in Mumbai and Dubai, Contractor’s portfolio
    reflects a legacy of bold innovation and architectural excellence.” \n
    His work redefines urban artistry through striking silhouettes, perfect proportions,
    and responsive design, making architecture not just functional but inspiring.\n
    Honored with the Padma Bhushan, Hafeez Contractor’s enduring legacy elevates
    every elevation and detail at The Pinnacle, where luxury meets timeless creativity,
    and construction itself becomes a statement of ambition, vision, and sophistication.`,
    
    position: "Contractor",
  },
  {
    image: "/images/users/zafar-img.png",
    name: "Zafar",
    review: `The interior planning is orchestrated by 'Zafar', a maestro in the world of interior design.
    His vision transforms spaces into a symphony of elegance and comfort, where every room tells story of style and sophistication. With Hafeez Contractor's architectural prowess and Zafar's artistic finesse, THE PINNACLE becomes the epitome of unparalleled living.`,    
    position: "Interior Designer",
  },
];
