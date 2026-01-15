"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have a question or want to know more about our services?
            Reach out to us and we’ll get back to you.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl px-4 py-3 outline-none"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-xl px-4 py-3 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-80 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO + MAP */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Our Office
            </h2>

            <p className="text-neutral-700 mb-6">
              Architect Firm<br />
              Nashik,<br />
              Maharashtra, India
            </p>

            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.7687400830205!2d73.77504447522847!3d19.97622558142261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU4JzM0LjQiTiA3M8KwNDYnMzkuNCJF!5e0!3m2!1sen!2sin!4v1768476482490!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
