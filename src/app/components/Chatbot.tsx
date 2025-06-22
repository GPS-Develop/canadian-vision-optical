"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
      question: ["hours", "open", "close"],
      answer: "We are open Monday-Thursday from 10am to 7pm, Friday from 10am to 6pm, and Saturday from 10am to 5pm. We are closed on Sundays."
    },
    {
      question: ["location", "address", "where"],
      answer: "You can find us at 221 Glendale Ave Unit #1006, St. Catharines, ON L2T 2K9."
    },
    {
      question: ["appointment", "booking", "schedule"],
      answer: "You can easily book an appointment online through our website! Just navigate to the 'Book Appointment' page."
    },
    {
      question: ["insurance", "billing"],
      answer: "We bill directly to most major insurance providers. For specific questions about your coverage, it's best to give us a call."
    },
    {
      question: ["services", "exam", "glasses"],
      answer: "We offer comprehensive eye exams, contact lens fittings, a wide selection of frames, and emergency eye care."
    },
    {
      question: ["contact", "phone", "email"],
      answer: "You can call us at (905) 988-9797 or email us at canadianvisionopticals@gmail.com."
    }
];

const suggestedQuestions = [
    "What are your hours?",
    "Where are you located?",
    "How do I book an appointment?",
    "Do you take insurance?"
];

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

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hello! How can I help you today? You can ask me about our hours, location, or services.", sender: 'bot' }]);
    }
  }, [isOpen, messages]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (text: string) => {
    if (text.trim() === '') return;

    const newMessages: Message[] = [...messages, { text, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    setTimeout(() => {
      let response = "I'm sorry, I can't answer that question. Please try asking something else, or contact us directly for more complex queries.";
      const lowerCaseText = text.toLowerCase();
      
      const faqItem = faqData.find(item => item.question.some(q => lowerCaseText.includes(q)));
      
      if (faqItem) {
        response = faqItem.answer;
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 1000);
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
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 rounded-t-2xl">
              <h3 className="text-lg font-bold text-gray-900">Virtual Assistant</h3>
              <button onClick={toggleChat} className="text-gray-500 hover:text-gray-900">
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.sender === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'}`}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                    <div ref={chatBottomRef} />
                </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
              <div className="flex flex-wrap gap-2 mb-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border border-gray-400 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button type="submit" className="ml-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 