"use client";

import BookingCalendar from "../components/BookingCalendar";
import { AnimationWrapper } from "../components/AnimationWrapper";

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimationWrapper>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
              Book Your <span className="text-blue-400">Appointment</span>
            </h1>
          </AnimationWrapper>
          <AnimationWrapper delay={0.1}>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Experience exceptional eye care with our expert optometrists. Schedule your comprehensive eye exam or consultation today.
            </p>
          </AnimationWrapper>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Services & Info */}
          <div className="lg:col-span-1 space-y-8">
            <AnimationWrapper>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Comprehensive Eye Exams</h3>
                      <p className="text-gray-600 text-sm">Complete vision assessment and health screening</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact Lens Fitting</h3>
                      <p className="text-gray-600 text-sm">Professional fitting and consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Frame Selection</h3>
                      <p className="text-gray-600 text-sm">Expert guidance on style and fit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Emergency Care</h3>
                      <p className="text-gray-600 text-sm">Urgent eye care when you need it most</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Arrive 10 minutes early</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Complete health history</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Comprehensive eye exam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">4</span>
                    </div>
                    <span className="text-gray-700">Discussion of results</span>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">Have questions about your appointment?</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-gray-900">Phone:</span>{' '}
                    <a href="tel:19059889797" className="text-blue-600 hover:underline">(905) 988-9797</a>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Email:</span>{' '}
                    <a href="mailto:canadianvisionopticals@gmail.com" className="text-blue-600 hover:underline">canadianvisionopticals@gmail.com</a>
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Column - Calendar */}
          <div className="lg:col-span-2">
            <AnimationWrapper delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Appointment</h2>
                  <p className="text-gray-600">Choose a date and time that works best for you</p>
                </div>
                <div className="p-4 sm:p-6">
                  <BookingCalendar />
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
} 