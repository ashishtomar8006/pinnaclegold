"use client";

import React from "react";

type InstagramPost = {
  id: string;
  href: string;
  image: string;
  alt: string;
  isVideo?: boolean;
};

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/thepinnaclebystj";

const posts: InstagramPost[] = [
  {
    id: "18129831355504221",
    href: "https://www.instagram.com/p/DScew2aAVSO/?igsh=cmhvbjBwazg4cHpq",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/589329272_17903468493321531_1674518510627905462_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc5MTA0MDI4NDY4NzY4NDc1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=RUk3zPhF_oEQ7kNvwF4FPgl&_nc_oc=Adn65VIMv975drkLX2CVHWP5gIgsGYm9-vgTxbvSHoKSvnRkZT1cZcs8O10465FSyEigaZxGP0RpYqZSCR4JPGL9&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=uLCB8JF1nl8ZkBhgVja5oA&oh=00_AflTJLBOC8CwWJa-thh6HXPfe0Gs8egNWabXmTuJ_fJhUQ&oe=6952E935",
    alt: "Soft sunlight, quiet corners, and moments to pause. Mornings at Homeland Regalia begin unhurried, where calm, comfort, and elegance set the tone for the day.",
    isVideo: true,
  },
  {
    id: "18089035277072084",
    href: "https://www.instagram.com/p/DScNNpZEo-k/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/601422062_18064929116544558_1754551608607592191_nfull.webp",
    alt: "Sunlit interiors, quiet comfort, and time to simply be. At Homeland Regalia, days unfold gracefully within thoughtfully designed living spaces that feel calm, refined, and deeply personal.",
  },
  {
    id: "18029816363566295",
    href: "https://www.instagram.com/reel/DScMtfzEgcD/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/601633233_18064929092544558_2587577196548014813_nfull.webp",
    alt: "As the day slows, serenity takes over. Evenings at Homeland Regalia unfold in warmth and stillness, where luxury feels personal, and peace feels complete.",
    isVideo: true,
  },
  {
    id: "18072573518595698",
    href: "https://www.instagram.com/reel/DSXHW3bEoAo/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/599942969_18064732466544558_7374321317976936850_nfull.webp",
    alt: "As the day slows, serenity takes over. Evenings at Homeland Regalia unfold in warmth and stillness, where luxury feels personal, and peace feels complete.",
    isVideo: true,
  },
  {
    id: "18060603368637397",
    href: "https://www.instagram.com/p/DR4yz6-kni2/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/589937816_18063573089544558_2095227281789774339_nfull.webp",
    alt: "A symphony of textures. Illuminated marble wall façades whisper light, contrasted by the warmth of wooden details. The spectacular chandelier is the crowning showpiece of this luxurious interior.",
  },
  {
    id: "17998849187700529",
    href: "https://www.instagram.com/reel/DR4yp-Jkk2N/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/591140658_18063572948544558_5808970793931203508_nfull.webp",
    alt: "Grandeur in every detail. Feel the tactile elegance of cool marble paired with rich wood.",
    isVideo: true,
  },
  {
    id: "17941181360965822",
    href: "https://www.instagram.com/p/DR4yabkEooA/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/588645029_18063572717544558_3090100003069630102_nfull.webp",
    alt: "Timeless mood created by light and texture. Expansive marble interiors meet comforting wooden details.",
  },
  {
    id: "17985977156868889",
    href: "https://www.instagram.com/reel/DRmhYVQj_G3/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/587615751_18062870993544558_762910706927883543_nfull.webp",
    alt: "Step into a portal of timeless splendour — a glimpse of what awaits within Homeland Regalia’s world of luxury.",
    isVideo: true,
  },
  {
    id: "18118824760558627",
    href: "https://www.instagram.com/p/DRhQq8OkkR6/",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/588372919_1253480736829549_2283060505355750689_nfull.webp",
    alt: "Grandeur begins the moment you arrive — and this is just the beginning.",
  },
];

export default function InstagramFeed() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200">
              <img
                src="https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/homelandregaliaofficial.webp"
                alt="homelandregaliaofficial"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-tight text-gray-900">
                 The Pinnacle | STJ Group
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                The Most Powerful Address in Punjab - Reserved for the Exclusive
                Few.
                <br />
                A Venture by SA Global
              </p>
            </div>
          </a>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#d1b371] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ddb96d]"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"
              />
            </svg>
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

              {/* Play icon for videos */}
              {post.isVideo && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
