"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookAppointment() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };
    const res = await fetch("/api/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      setStatus("success");
      form.reset();
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl p-10">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">Book an Appointment</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-500 font-medium" />
          <input name="email" type="email" placeholder="Your Email" required className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-500 font-medium" />
          <input name="phone" type="tel" placeholder="Your Phone Number" required className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-500 font-medium" />
          <textarea name="message" placeholder="Your Message" rows={4} required className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-500 font-medium" />
          <button type="submit" disabled={loading} className="mt-2 px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-900 transition disabled:opacity-60 text-lg">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {status === "success" && <p className="text-green-600 mt-6 text-center font-medium">Your appointment request has been sent!</p>}
        {status === "error" && <p className="text-red-600 mt-6 text-center font-medium">There was an error. Please try again.</p>}
      </div>
    </div>
  );
} 