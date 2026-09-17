import { ArrowRight, Check, Play } from "lucide-react";
import heroImage from "../../assets/hero.png";
import Button from "../ui/Button";

const trustBadges = ["Trusted & Secure", "Multi-bank support", "Guided Resolution"];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#f7faff]">
      <div className="section-shell grid items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-16 xl:py-20">

        {/* LEFT — content */}
        <div className="relative z-10 w-full">
          <div className="eyebrow"> SAFE BANKING. STRONGER YOU.</div>
          <h1 className="mt-4 text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.07] tracking-[-0.04em] text-brand-900">
            Having a problem with your bank?{" "}
            {/* <span className="text-brand-500">Let's help you resolve it.</span> */}
          </h1>
          <p className="mt-5 text-[15px] leading-7 text-slate-600 max-w-lg">
            File your banking complaint, track the status, and get expert guidance to navigate your dispute with confidence.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#query">Raise a Query <ArrowRight size={16} /></Button>
            <Button variant="outline" href="#process">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
                <Play size={12} fill="white" />
              </span>
              Watch How It Works
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-semibold text-slate-600">
            {trustBadges.map((label) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500 text-white">
                  <Check size={12} />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — banner image */}
        <div className="relative w-full flex items-center">
          <div className="hero-banner">
            <img
              src={heroImage}
              alt="DisputePaisa — Banking dispute resolution assistance"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

