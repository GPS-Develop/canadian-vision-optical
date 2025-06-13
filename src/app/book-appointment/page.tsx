"use client";

import BookingCalendar from "../components/BookingCalendar";

export default function BookAppointment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4 py-16">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-2 text-center text-gray-900 tracking-tight">
          Book an Appointment
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
          Schedule your visit with us in just a few clicks. Select a time slot that works for you!
        </p>
        <BookingCalendar />
      </div>
    </div>
  );
} 