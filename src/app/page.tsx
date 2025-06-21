import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-24 py-16 gap-12">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-xl">
            Vision <span className="text-gray-400 font-light">Perfected</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Experience the perfect blend of style and precision at Canadian Vision Opticals. From classic frames to contemporary designs, we bring you eyewear that defines elegance and clarity.
          </p>
          <div className="flex gap-4">
            <Link href="/book-appointment">
              <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium shadow-lg transition-transform duration-200 hover:bg-gray-900 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-black">Book Appointment</button>
            </Link>
            <Link href="/virtual-try-on">
              <button className="px-8 py-3 bg-white text-black border-2 border-black rounded-full text-lg font-medium shadow-lg transition-transform duration-200 hover:bg-gray-50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-black">Virtual Try-On</button>
            </Link>
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

      {/* Insurance Billing Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">We Bill Directly to Insurance</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">(These are just a few of the companies we support!)</p>
        <div className="w-full flex items-center justify-center">
          <Image
            src="/insurance-logos.jpg"
            alt="Insurance companies we bill to"
            width={1200}
            height={400}
            className="max-w-full h-auto rounded-xl shadow-md border border-gray-100"
            priority
          />
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="w-full bg-gray-50 py-16 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Visit Us</h2>
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl items-center justify-center">
          {/* Map */}
          <div className="w-full md:w-1/2 h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=221+Glendale+Ave+Unit+%231006,+St.+Catharines,+ON+L2T+2K9,+Canada&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Canadian Vision Opticals Location"
            />
          </div>
          {/* Store Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-gray-800 text-lg">
            <div>
              <span className="font-semibold">Located in:</span> St. Catharines
            </div>
            <div>
              <span className="font-semibold">Address:</span> 221 Glendale Ave Unit # 1006, St. Catharines, ON L2T 2K9
            </div>
            <div>
              <span className="font-semibold">Phone:</span> <a href="tel:19059889797" className="text-blue-600 hover:underline">(905) 988-9797</a>
            </div>
            <div>
              <span className="font-semibold">Fax:</span> <a href="tel:19059889780" className="text-blue-600 hover:underline">(905) 988-9780</a>
            </div>
            <div>
              <span className="font-semibold">Email:</span> <a href="mailto:canadianvisionopticals@gmail.com" className="text-blue-600 hover:underline">canadianvisionopticals@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold">Hours:</span>
              <ul className="ml-4 mt-1 text-base">
                <li>Monday: 10 a.m.–7 p.m.</li>
                <li>Tuesday: 10 a.m.–7 p.m.</li>
                <li>Wednesday: 10 a.m.–7 p.m.</li>
                <li>Thursday: 10 a.m.–8 p.m.</li>
                <li>Friday: 10 a.m.–6 p.m.</li>
                <li>Saturday: 10 a.m.–5 p.m.</li>
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
            <a href="https://www.instagram.com/canadianvisionopticals/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              Follow us on Instagram
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Canadian Vision Opticals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
