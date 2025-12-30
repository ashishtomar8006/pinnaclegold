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
    href: "https://www.instagram.com/reel/DSXVlVmgaBa/?igsh=MWx3NXF1b2ozcDlkcA%3D%3D",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/586679568_17903229714321531_1253777437921310329_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=Mzc4OTU5MjUzNjI0NzU0MTg1MDE3OTAzMjI5NzExMzIxNTMx.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=BFPcEArEUa8Q7kNvwHUJXyD&_nc_oc=Adk1eNAdzJMGdB_-Fh_Tczj0IShV3Sd5v111vKhjKj7Jy9nIAdPgW70xeoxjBm7l_aFH4QQ86u8u-J9-TO1KGMQ1&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=sisGLCLCFqULYyLQ7ULBQw&oh=00_AfkbleH-OgUQMMDn23Jhg3paF3pCrvQuEBMhGNq8g7ZfaA&oe=6959A7D5",
    alt: "Soft sunlight, quiet corners, and moments to pause. Mornings at Homeland Regalia begin unhurried, where calm, comfort, and elegance set the tone for the day.",
    isVideo: true,
  },
  {
    id: "18089035277072084",
    href: "https://www.instagram.com/reel/DSmzhHegcNs/?igsh=MWMyNzZjaWlxYzZzeQ%3D%3D",
    image:
      "https://scontent.cdninstagram.com/v/t51.71878-15/605615164_1582423499838633_6681206256856053701_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=Mzc5Mzk0NjMxMjI0OTAzMzU4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=0jDqxOGiybcQ7kNvwGiBkFU&_nc_oc=AdkGp2UYSv66UMRPru7xxM-ureD7b1WfohsuHsxLgbG25sWPbFdy2HCaNka2Q67GfBs&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=WmM9XCA4OSkswF6NLadpLw&oh=00_AfnHF4H0ZFfgBUW72kyT6HzQvGh5e4ebrIi-IAXjdIpbtg&oe=6959ABB5",
    alt: "Sunlit interiors, quiet comfort, and time to simply be. At Homeland Regalia, days unfold gracefully within thoughtfully designed living spaces that feel calm, refined, and deeply personal.",
  },
  {
    id: "18029816363566295",
    href: "https://www.instagram.com/reel/DRhLVWJAUAd/?igsh=OWxxNm1jZmpuYnV6&wa_logging_event=video_play_open",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/588706152_17900821137321531_6028295941659972668_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=Mzc3NDM0NzgwODEwNzIxNjkyNTE3OTAwODIxMTMxMzIxNTMx.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjI3MDB4NDgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=p836AkNUSacQ7kNvwFfJ82j&_nc_oc=AdnQ3WuWp4s0FpaYVvlp0z_WTcL6tzgHXQClu72pMYUAmQxJyIZZJWC_ia3aWwDcvOw&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=KSZLTkHaWvmFx26F7EOmpQ&oh=00_Afki4r32DnwQolfRL_24IKJjOU4taUQpSKaIWaL9NyqLww&oe=695984DE",
    alt: "As the day slows, serenity takes over. Evenings at Homeland Regalia unfold in warmth and stillness, where luxury feels personal, and peace feels complete.",
    isVideo: true,
  },
  {
    id: "18072573518595698",
    href: "https://www.instagram.com/reel/DRhLVWJAUAd/?igsh=OWxxNm1jZmpuYnV6&wa_logging_event=video_play_open",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/599942969_18064732466544558_7374321317976936850_nfull.webp",
    alt: "As the day slows, serenity takes over. Evenings at Homeland Regalia unfold in warmth and stillness, where luxury feels personal, and peace feels complete.",
    isVideo: true,
  },
  {
    id: "18060603368637397",
    href: "https://www.instagram.com/reel/DO6C4XdgUjh/?igsh=Y2NjbGNjeHlvd2Ew",
    image:
      "https://homelandregalia.com/wp-content/uploads/sb-instagram-feed-images/589937816_18063573089544558_2095227281789774339_nfull.webp",
    alt: "A symphony of textures. Illuminated marble wall façades whisper light, contrasted by the warmth of wooden details. The spectacular chandelier is the crowning showpiece of this luxurious interior.",
  },
  {
    id: "17998849187700529",
    href: "instagram.com/p/DRPE-6RE9N4/?igsh=MTV6N2g2b3dyODNlbg==",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/582865984_17900045550321531_7722239185521694625_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc2OTI1MzMyODQ4OTUzNDMyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=-kASMMbaBIcQ7kNvwE5I9KM&_nc_oc=AdmG-9U4zKNZCnL1QP8xjj7aZXB1VyncUhKMzre3LWF4LU3DZBXzXcKVJKGEWOPAm5QRVovzfKsyvDgOppdY_msp&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=t5gnUdsoZ-BOMc4VhNQ62g&oh=00_AfmKZt7CYo-Vg7IKLJr6FoEYoMaTnvK_CCIMWZg7Jp80NQ&oe=69599812",
    alt: "Grandeur in every detail. Feel the tactile elegance of cool marble paired with rich wood.",
    isVideo: false,
  },
  {
    id: "17941181360965822",
    href: "https://www.instagram.com/p/DRmfohwAXIp/?igsh=MTlpbjA1bDF5ZHVleA%3D%3D",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/589906156_17901014328321531_6812801363821963932_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc3NTg0NDQ2MjA1NjUzNDU2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=Acsl86fsjggQ7kNvwHZ7c4W&_nc_oc=Adnx7ozBtHzEO5LVUnatX8VXyiuRidlGybOYvg67tdqIWa_ZEEK5HGAUUP7_dtob6-sbW3QlzMTV-20_l-B1mDcv&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=X1zkI9Hplz01B66i5yBtqg&oh=00_Afnvo0a5_8ceMwC0TKVjD002WWI3a7Vf_vZsHiCJ1QpEMA&oe=69598986",
    alt: "Timeless mood created by light and texture. Expansive marble interiors meet comforting wooden details.",
    isVideo: false,
  },
  {
    id: "17985977156868889",
    href: "https://www.instagram.com/p/DRzTqzfgX-U/?igsh=MWRpN2c4OHVpcnU0bw%3D%3D",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/588430376_17901607134321531_4185472481715166070_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc3OTQ1MTAxNjY4NTEyNTUyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FLEFtk25S00Q7kNvwFJZj8V&_nc_oc=Adnd_5dh8QjYQwU8OKa7XSxhqW9wLuTiCrHdOUZQCVi9irwRm7Ov_VYvHcTj0amWdkIsFx4uEt1YjNvxo7GZSVai&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=2AP3AtA5-TTo4c96GFoaQg&oh=00_AflrtN40MsqJkJMzpjDt2795KPlzUdhEqiuDiC3KykdYpA&oe=69599992",
    alt: "Step into a portal of timeless splendour — a glimpse of what awaits within Homeland Regalia’s world of luxury.",
    isVideo: false,
  },
  {
    id: "18118824760558627",
    href: "https://www.instagram.com/p/DSkK22dgQZr/?igsh=OG9obG1ucDYydmt6",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-15/602307111_17903822592321531_3299204162438486765_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc5MzIwNDUzNTk0NjcwODU4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FYrRRX9WAHAQ7kNvwFr2j1k&_nc_oc=AdnlxFU9WeHLz76F65KKiiUSrWCiLl4hUT0axWLR0J5SY7xA4VeQKm0zdgncRFsTxymUcjzWgHM9VdxK1tBrjjuE&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=bwnJe0-ytJMwsPTqjnfosA&oh=00_AfmC4rC620W18O2ZfenAh99SMKfzagd7lxs_MSVAOW5ssw&oe=69599E10",
    alt: "Grandeur begins the moment you arrive — and this is just the beginning.",
    isVideo: false,
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
                src="/images/logo/pinnaclenewonelogo.jpg"
                alt="homelandregaliaofficial"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-tight text-gray-900">
                The Pinnacle | STJ Group
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Where contemporary design meets timeless elegance. In The Heart
                Of Aero City, Mohali.
                <br />
                Crafted By : Hafeez Contractor | Zafar
              </p>
            </div>
          </a>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#d1b371] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ddb96d]"
          >
            <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 448 512">
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
