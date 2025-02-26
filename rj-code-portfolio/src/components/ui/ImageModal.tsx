"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 backdrop-blur-md bg-black/75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[95vw] max-h-[95vh]">
        <Image
          src={imageUrl}
          alt={altText}
          onClick={(e) => e.stopPropagation()}
          className="object-contain w-auto h-auto max-w-full max-h-[95vh]"
          width={1920}
          height={1080}
          priority
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
