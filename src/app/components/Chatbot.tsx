"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <motion.button
          onClick={toggleChat}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChatIcon />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-20 right-5 w-[calc(100vw-40px)] max-w-sm h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-100"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 rounded-t-2xl flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-900">Virtual Assistant</h3>
              <button onClick={toggleChat} className="text-gray-500 hover:text-gray-900">
                <CloseIcon />
              </button>
            </div>

            {/* Chatbot Iframe */}
            <div className="flex-1 w-full h-full">
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/7kfqAkjclIZ7F6xMUE8I7"
                    width="100%"
                    style={{ height: '100%', border: 'none' }}
                    frameBorder="0"
                ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 