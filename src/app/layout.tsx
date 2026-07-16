import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import Script from "next/script";
import "./globals.css"

const font = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Real eState - Premium Property Solutions",
  description: "Discover luxury properties and premium locations with Real eState",
}

export default function RootLayout({
  children,
  }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <meta
          name="facebook-domain-verification"
          content="hqh1038velf3zbszgled709aj04uh9"
        />
      </head>

      <body className={`${font.className} bg-white dark:bg-black antialiased`} suppressHydrationWarning>

        {children}
        <Script
          id="orai-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,a){
                var c = e.head || e.getElementsByTagName("head")[0],
                    n = e.createElement("script");
                n.async = true;
                n.defer = true;
                n.type = "text/javascript";
                n.src = t + "/static/js/widget.js?config=" + JSON.stringify(a);
                c.appendChild(n);
              }(
                document,
                "https://app.orai-robotics.in",
                {
                  bot_key: "89d350c3c0fe4b72",
                  welcome_msg: true,
                  branding_key: "orairobotics",
                  server: "https://app.orai-robotics.in",
                  e: "p",
                }
              );
            `,
          }}
        />
      </body>
    </html>
  )
}
