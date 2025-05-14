import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white shadow-sm backdrop-blur bg-opacity-90">
        <div className="flex items-center gap-3">
          <Image
            src="/vellore-logo.png"
            alt="Vellore Optical Logo"
            width={40}
            height={40}
            className="rounded-full bg-black"
            priority
          />
          <span className="text-2xl font-semibold tracking-tight text-gray-900">Vellore Optical</span>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/velloreoptical/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-24 py-16 gap-12">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-xl">
            Vision <span className="text-gray-400 font-light">Perfected</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Experience the perfect blend of style and precision at Vellore Optical. From classic frames to contemporary designs, we bring you eyewear that defines elegance and clarity.
          </p>
          <div className="flex gap-4">
            <Link href="/book-appointment">
              <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium shadow-lg hover:bg-gray-900 transition">Book Appointment</button>
            </Link>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full text-lg font-medium hover:bg-gray-50 transition">View Collection</button>
          </div>
        </div>
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[340px] h-[425px] md:w-[360px] md:h-[480px] drop-shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-white">
            <Image
              src="/eyeglasses-hero.png"
              alt="Premium eyeglasses product"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="w-full bg-gray-50 py-16 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Visit Us</h2>
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl items-center justify-center">
          {/* Map */}
          <div className="w-full md:w-1/2 h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=10385+Weston+Rd,+Vaughan,+ON+L4H+3T4,+Canada&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vellore Optical Location"
            />
          </div>
          {/* Store Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-gray-800 text-lg">
            <div>
              <span className="font-semibold">Located in:</span> Canada Star Plaza
            </div>
            <div>
              <span className="font-semibold">Address:</span> 10385 Weston Rd, Vaughan, ON L4H 3T4
            </div>
            <div>
              <span className="font-semibold">Phone:</span> <a href="tel:13654187055" className="text-blue-600 hover:underline">(365) 418-7055</a>
            </div>
            <div>
              <span className="font-semibold">Appointments:</span> <a href="https://velloreoptical.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">velloreoptical.com</a>
            </div>
            <div>
              <span className="font-semibold">Hours:</span>
              <ul className="ml-4 mt-1 text-base">
                <li>Monday: 11 a.m.–6:30 p.m.</li>
                <li>Tuesday: 11 a.m.–6:30 p.m.</li>
                <li>Wednesday: 11 a.m.–6:30 p.m.</li>
                <li>Thursday: 11 a.m.–7:30 p.m.</li>
                <li>Friday: 11 a.m.–5:30 p.m.</li>
                <li>Saturday: 11 a.m.–5 p.m.</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Footer */}
      <footer className="text-center text-gray-400 text-sm py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-center gap-8 mb-4">
            <a href="https://www.instagram.com/velloreoptical/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              Follow us on Instagram
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Vellore Optical. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
