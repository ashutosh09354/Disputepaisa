import { useState } from "react";
import { navLinks } from "../../data/constants";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="section-shell flex h-[72px] items-center justify-between">
        <Logo />
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-xl text-brand-900 transition active:scale-95 md:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" href="/login" className="px-4 py-2.5 text-brand-500">Login</Button>
          <Button href="#query" className="px-4 py-2.5">Raise a Query</Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute inset-x-0 top-full border-b border-slate-100 bg-white px-4 py-4 shadow-[0_14px_28px_rgba(8,41,79,0.1)] md:hidden" aria-label="Mobile menu">
          <div className="grid gap-2">
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-brand-900 transition active:bg-brand-50">About</a>
            <a href="/login" onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-brand-900 transition active:bg-brand-50">Login</a>
            <a href="/#query" onClick={() => setIsMenuOpen(false)} className="rounded-xl bg-brand-500 px-4 py-3 text-sm font-bold text-white shadow-sm transition active:bg-brand-600">Raise a Query</a>
            <a href="/how-it-works" onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-brand-900 transition active:bg-brand-50">How It Works</a>
          </div>
        </nav>
      )}
    </header>
  );
}
