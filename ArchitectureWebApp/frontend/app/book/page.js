"use client";
import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  date: "",
  time: "",
  message: ""
});


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/bookings/create", form)
      alert("Your booking request has been submitted. We will contact you soon.");
    }catch (error)
    {
      console.error(error);
      alert("Failed to submit the request. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Book a Consultation
        </h1>

        <p className="text-neutral-600 text-center mb-8">
          Share your project details and our team will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-2 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-2 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Project Type</label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-2 outline-none"
              >
                <option value="">Select</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Interior">Interior</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Estimated Budget</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-2 outline-none"
              >
                <option value="">Select</option>
                <option value="5-10 Lakh">₹5–10 Lakh</option>
                <option value="10-25 Lakh">₹10–25 Lakh</option>
                <option value="25+ Lakh">₹25+ Lakh</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <label className="block mb-1 font-medium">Preferred Date</label>
                <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-2 outline-none"
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Preferred Time</label>
                <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-2 outline-none"
                />
            </div>
            </div>


          <div>
            <label className="block mb-1 font-medium">Project Details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-xl px-4 py-2 outline-none"
              placeholder="Tell us about your project requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </main>
  );
}
