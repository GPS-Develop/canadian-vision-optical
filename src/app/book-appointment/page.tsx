"use client";

import BookingCalendar from "../components/BookingCalendar";

export default function BookAppointment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-10">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
          Book an Appointment
        </h1>
        <BookingCalendar />
      </div>
    </div>
  );
} 