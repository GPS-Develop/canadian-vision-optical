"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function BookingCalendar() {
  const [scheduled, setScheduled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly event
    function handleEvent(e: MessageEvent) {
      if (e.data && e.data.event && e.data.event === 'calendly.event_scheduled') {
        setScheduled(true);
      }
    }
    window.addEventListener('message', handleEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEvent);
    };
  }, []);

  return (
    <div className="w-full h-[700px] flex flex-col items-center justify-center">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/infovelloreoptical?hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '600px' }}
      />
      {scheduled && (
        <button
          className="mt-8 px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-900 transition text-lg"
          onClick={() => router.push("/")}
        >
          Return to Homepage
        </button>
      )}
    </div>
  );
} 