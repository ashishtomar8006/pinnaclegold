"use client"
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=917230972309&text=Connect+with+The+Pinnacle+By+STJ+on+WhatsApp&type=phone_number&app_absent=0"
        className="fixed bottom-4 left-4 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src="/images/header/whatsapp.png" alt="" />
      </a>
    </>
  );
}
