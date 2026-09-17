import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/constants";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="section-shell flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" href="#query" className="px-4 py-2.5 text-brand-500">Login</Button>
          <Button href="#query" className="px-4 py-2.5">Raise a Query</Button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg border p-2 text-brand-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white px-5 py-4">
          {navLinks.map(([label, href]) => (
            <a
              onClick={() => setOpen(false)}
              key={label}
              href={href}
              className="block border-b border-slate-100 py-3 text-sm font-semibold"
            >
              {label}
            </a>
          ))}
          <Button href="#query" className="mt-4 w-full">Raise a Query</Button>
        </div>
      )}
    </header>
  );
}
