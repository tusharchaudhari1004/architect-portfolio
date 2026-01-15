import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-20 lg:px-32 py-5 flex justify-between items-center bg-[#f5f1e8] text-[#171717] border-b border-black/10">
      
      {/* LOGO */}
      <h1 className="text-4xl font-serif font-bold">
        Architect Firm
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-lg font-medium">
        <NavLink href="/" label="Home" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/book" label="Book" />
        <NavLink href="/contact" label="Contact" />
        <NavLink href="/about" label="About" />
      </div>
    </nav>
  );
}

/* REUSABLE NAVLINK WITH UNDERLINE ANIMATION */
function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="
        relative 
        after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-[2px] 
        after:bg-[#171717] 
        after:transition-all after:duration-300 
        hover:after:w-full
      "
    >
      {label}
    </Link>
  );
}
