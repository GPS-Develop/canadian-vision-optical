"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white shadow-sm backdrop-blur bg-opacity-90">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/vellore-logo.png"
            alt="Vellore Optical Logo"
            width={40}
            height={40}
            className="rounded-full bg-black group-hover:opacity-80 transition"
            priority
          />
          <span className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-gray-700 transition">Vellore Optical</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/eyewear-tips" className="text-gray-700 hover:text-black font-medium transition-colors">
          Eyewear Tips
        </Link>
        <Link href="/virtual-try-on" className="text-gray-700 hover:text-black font-medium transition-colors">
          Virtual Try-On
        </Link>
        <a 
          href="https://www.instagram.com/velloreoptical/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform duration-200 drop-shadow-lg hover:scale-110"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f58529" />
                <stop offset="30%" stopColor="#dd2a7b" />
                <stop offset="60%" stopColor="#8134af" />
                <stop offset="100%" stopColor="#515bd4" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)" />
            <circle cx="12" cy="12" r="5" fill="white" />
            <circle cx="17" cy="7" r="1.3" fill="white" />
            <circle cx="12" cy="12" r="3.5" fill="url(#ig-gradient)" />
          </svg>
        </a>
      </div>
    </nav>
  );
} 