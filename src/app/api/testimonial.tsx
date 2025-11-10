import { Testimonial } from "@/types/testimonial"
import { now } from "next-auth/client/_utils"

export const testimonials: Testimonial[] = [
    {
        image: '/images/testimonial/smiths.jpg',
        name: 'Hafeez',
        review: `Hafeez Contractor, a visionary architect revered globally, has transformed India’s
skylines with his pioneering designs and refined mastery. He now brings this
legendary expertise to The Pinnacle, setting a new benchmark for luxury living in
Mohali. “With acclaimed projects in Mumbai and Dubai, Contractor’s portfolio
reflects a legacy of bold innovation and architectural excellence.” 
His work redefines urban artistry through striking silhouettes, perfect proportions,
and responsive design, making architecture not just functional but inspiring.
Honored with the Padma Bhushan, Hafeez Contractor’s enduring legacy elevates
every elevation and detail at The Pinnacle, where luxury meets timeless creativity,
and construction itself becomes a statement of ambition, vision, and sophistication.`,
        position: 'Contractor'
    },
    // {
    //     image: '/images/testimonial/johns.jpg',
    //     name: 'Sam & Mickay John',
    //     review: 'I quickly found my dream home! The listings were thorough, the photos were spot-on, and the entire process was smooth. The customer service was outstanding, addressing all my questions with ease. I’ll definitely use this platform again!',
    //     position: 'Buyer'
    // },
]