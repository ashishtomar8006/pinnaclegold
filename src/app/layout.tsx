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
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        {children}
        <Script
          id="xbotic-widget"
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
                "https://xbotic.cbots.live",
                {
                  bot_key: "5bf549eb79724629",
                  launch_flow: "C9E5ECE78D7A4BE3ADBC70B628391AA7",
                  welcome_msg: true,
                  branding_key: "xbotic",
                  server: "https://xbotic.cbots.live",
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
