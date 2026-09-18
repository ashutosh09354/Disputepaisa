import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "../ui/Logo";

const socialLinks = [
  [Linkedin, "#"],
  [Twitter, "#"],
  [Youtube, "#"],
  [Instagram, "#"],
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#061a31] text-white">
      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Banking dispute assistance with a simple, secure and transparent query journey.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(([Icon, href], i) => (
                <a key={i} href={href} className="social-icon"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="footer-head">Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#process">How It Works</a>
              <a href="#track">Track Query</a>
              <a href="#faq">FAQs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="footer-head">Supported Banks</h3>
            <div className="footer-links">
              <span>SBI</span>
              <span>HDFC Bank</span>
              <span>ICICI Bank</span>
              <span>Axis Bank</span>
              <span>Kotak Mahindra</span>
              <span>And more...</span>
            </div>
          </div>
          <div>
            <h3 className="footer-head">Legal & Contact</h3>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
              <span className="mt-2">support@disputepaisa.com</span>
              <span>+91 XXXXX XXXXX</span>
              <span>Mon - Sat, 9AM - 6PM</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 text-xs text-white/45 md:flex-row md:justify-between">
          <span>© 2026 DisputePaisa. All rights reserved.</span>
          <span>Made in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
