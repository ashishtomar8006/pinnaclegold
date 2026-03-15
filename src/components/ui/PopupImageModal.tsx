"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface PopupImageModalProps {
  open: boolean;
  onClose: () => void;
}

const PopupImageModal: React.FC<PopupImageModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-lg shadow-xl max-w-[90%] md:max-w-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3 cursor-pointer right-3 z-10 bg-white rounded-full p-1 shadow hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <Image
          src="/images/header/popupimg1.jpeg"
          alt="Popup"
          width={300}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default PopupImageModal;
