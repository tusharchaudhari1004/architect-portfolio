export default function ServicesPage() {
  return (
        <section className="relative w-full h-[780px] overflow-hidden">

  {/* Background Image */}
  <img
    src="/services-hero.jpg"
    alt="Architecture"
    className="
      absolute inset-0 w-full h-full object-cover
      grayscale blur-sm brightness-[0.55]
      dark:brightness-[0.35]
    "
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* MOTTO */}
  <div className="relative z-20 h-full flex items-center justify-center px-8">

    <div className="flex items-center gap-6">

      {/* LEFT QUOTE — fully customizable */}
      <span className="
        font-serif text-white/80 
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]
        text-[90px]
      ">
        &ldquo;
      </span>

      {/* Motto text */}
      <h1 className="
        text-3xl md:text-5xl font-serif font-semibold 
        text-white tracking-wide text-center
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
      ">
        Designing environments that inspire.
      </h1>

      {/* RIGHT QUOTE — fully customizable */}
      <span className="
        font-serif text-white/80 
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]
        text-[90px]
      ">
        &rdquo;
      </span>

    </div>

  </div>

</section>



  );
}
