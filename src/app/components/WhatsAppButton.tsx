"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/17695673765?text=Hi%20Vellore%20Optical!%20I%20have%20a%20question."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center px-5 py-3 text-lg font-semibold transition gap-2"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        className="mr-2"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.122 1.392-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.771-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.622.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.955 0 1.744 1.27 3.428 1.447 3.666.178.237 2.5 3.82 6.063 5.215.849.292 1.51.466 2.027.596.851.204 1.627.175 2.24.106.683-.077 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z"
          fill="#fff"
        />
      </svg>
      Chat with us
    </a>
  );
} 