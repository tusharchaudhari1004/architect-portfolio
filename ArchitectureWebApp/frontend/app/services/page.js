export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">

      {/* HERO SECTION */}
      <section className="relative w-full h-[750px] overflow-hidden">

        {/* Background Image */}
        <img
          src="/services-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover grayscale blur-[3px] opacity-60"
          alt="Services Hero"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* --- MOTTO WRAPPER (Perfect Center) --- */}
        <div className="relative z-20 flex items-center justify-center h-full px-8">

          {/* MOTTO BOX (Positioning reference for quotes) */}
          <div className="relative max-w-5xl mx-auto text-center">

            {/* TOP-LEFT QUOTE */}
            <span
              className="absolute -top-[38px] -left-[80px] text-white/70 font-serif drop-shadow-2xl text-[120px]"
            >
              &ldquo;
            </span>

            <h1
                className="
                text-[50px] font-serif font-semibold 
                text-white tracking-wide 
                drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]
                fade-up
                [text-shadow:_0_0_900px_rgba(255,255,255,0.55)]
                "
            >
              Designing environments that inspire.
            </h1>

            {/* BOTTOM-RIGHT QUOTE */}
            <span
              className="absolute -bottom-[80px] -right-[80px] text-white/70 font-serif drop-shadow-2xl text-[120px]"
            >
              &rdquo;
            </span>

          </div>
        </div>

      </section>

    </div>
  );
}
