"use client";

import VirtualTryOn from "@/app/components/VirtualTryOn";

export default function VirtualTryOnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Virtual Try-On
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Try on our eyewear collection virtually! See how different frames look on you before visiting our store.
          </p>
        </div>
        
        <VirtualTryOn />
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            💡 Tip: Make sure you&apos;re in a well-lit area for the best experience
          </p>
          <a 
            href="/book-appointment" 
            className="inline-block px-8 py-3 bg-black text-white rounded-full text-lg font-medium shadow-lg transition-transform duration-200 hover:bg-gray-900 hover:scale-105"
          >
            Book Appointment to Try In-Store
          </a>
        </div>
      </div>
    </div>
  );
} 