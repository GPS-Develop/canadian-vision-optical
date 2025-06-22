"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    };
  }
}

// Custom Checkmark Icon with animation
const CheckIcon = () => (
  <motion.svg
    className="w-20 h-20 mx-auto text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay: 0.2, type: 'tween', duration: 0.8, bounce: 0 },
            opacity: { delay: 0.2, duration: 0.01 },
          },
        },
      }}
    />
  </motion.svg>
);

// A more elegant loading spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center space-x-2">
    <motion.div
      className="w-4 h-4 bg-blue-500 rounded-full"
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    />
    <motion.div
      className="w-4 h-4 bg-blue-500 rounded-full"
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }
      }}
    />
    <motion.div
      className="w-4 h-4 bg-blue-500 rounded-full"
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4
        }
      }}
    />
  </div>
);

export default function BookingCalendar() {
  const [scheduled, setScheduled] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (scheduled) return; // Don't re-initialize if already scheduled

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      setLoading(false);
      if (window.Calendly) {
        const parentElement = document.querySelector<HTMLElement>('.calendly-inline-widget');
        if (parentElement) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/infocanadianvisionoptical?hide_gdpr_banner=1&primary_color=3b82f6',
            parentElement,
          });
        }
      }
    };

    document.body.appendChild(script);

    function handleEvent(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        setScheduled(true);
      }
    }
    window.addEventListener('message', handleEvent);

    return () => {
      // Clean up script and event listener
      const calendlyScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (calendlyScript) {
        document.body.removeChild(calendlyScript);
      }
      window.removeEventListener('message', handleEvent);
    };
  }, [scheduled]);

  return (
    <div className="relative w-full min-h-[680px] sm:min-h-[650px] flex flex-col items-center justify-center transition-all duration-300">
      <AnimatePresence>
        {scheduled && (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
              <CheckIcon />
              <h2 className="text-3xl font-bold text-gray-900 mt-6">Appointment Confirmed!</h2>
              <p className="text-gray-600 mt-2 max-w-md mx-auto">
                Thank you for booking with us. A confirmation email has been sent to you. We look forward to seeing you!
              </p>
              <motion.button
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors text-lg flex items-center gap-2 mx-auto"
                onClick={() => router.push("/")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Homepage
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!scheduled && (
        <div className="w-full h-full">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10 rounded-2xl">
              <LoadingSpinner />
              <p className="mt-4 text-gray-600 font-medium">Connecting to Calendar...</p>
            </div>
          )}
          <div
            className={`calendly-inline-widget w-full h-[680px] sm:h-[650px] transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
            data-url="https://calendly.com/infocanadianvisionoptical?hide_gdpr_banner=1&primary_color=3b82f6"
            style={{ minWidth: '320px' }}
          />
        </div>
      )}
    </div>
  );
} 