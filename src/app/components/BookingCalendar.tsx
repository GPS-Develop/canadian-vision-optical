"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function BookingCalendar() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[700px]">
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/infovelloreoptical"
        style={{ minWidth: '320px', height: '100%' }}
      />
    </div>
  );
} 