import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Headphones, MessageCircle, Play, Search, Smartphone, X } from "lucide-react";
import videoPoster from "../assets/laptop-support.png";
import { issues } from "../data/constants";

// Replace this URL with the final Dispute Paisa walkthrough when it is available.
const videoUrl = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const steps = [
  ["01", "Describe Your Problem", "Tell us what happened with your bank account or transaction.", FileText],
  ["02", "Fill Out the Query Form", "Provide your details, bank information, issue type and description.", FileText],
  ["03", "Submit Your Query", "Receive your unique query reference ID after submitting your request.", CheckCircle2],
  ["04", "Team Review", "Your query is forwarded to the appropriate team for review.", Search],
  ["05", "Customer Contact", "Our team contacts you regarding the next steps.", MessageCircle],
  ["06", "Track Your Query", "Use your reference ID to check available status updates.", Smartphone],
];

export default function HowItWorks() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 2800);
    return () => window.clearInterval(progressTimer);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Phone layout: preserve the easy-to-scan stacked journey. */}
        <div className="md:hidden">
          <section className="section-soft">
            <div className="section-shell py-16 text-center">
            <p className="eyebrow justify-center">How it works</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-[-.05em] text-brand-900 md:text-6xl">
              From Your Banking Problem
              <span className="block text-brand-500">To the Next Step.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Watch our short walkthrough to understand how we help with your banking concern.
            </p>

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group relative mx-auto mt-10 block w-full max-w-4xl overflow-hidden rounded-3xl bg-brand-900 text-left shadow-[0_20px_55px_rgba(8,41,79,0.22)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-brand-300"
              aria-label="Play the How Dispute Paisa works video"
            >
              <img src={videoPoster} alt="Video preview of Dispute Paisa support" className="aspect-video w-full object-cover opacity-65 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-50" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-500 shadow-lg transition group-hover:scale-110 md:h-20 md:w-20">
                  <Play className="ml-1" size={32} fill="currentColor" aria-hidden="true" />
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/90 to-transparent px-6 pb-6 pt-16 text-lg font-extrabold text-white md:px-9 md:pb-8">Watch how Dispute Paisa works</span>
            </button>
            </div>
          </section>
          <section className="section-shell py-16">
            <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-extrabold tracking-[-.03em] text-brand-900">What happens next</h2>
            <div className="mt-10 space-y-5">
              {steps.map(([number, title, text, Icon]) => (
                <div key={number} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:gap-5 sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand-200 bg-brand-100 text-brand-600 shadow-sm"><Icon size={21} strokeWidth={2.2} /></span>
                  <div>
                    <span className="text-xs font-extrabold tracking-widest text-brand-500">STEP {number}</span>
                    <h3 className="mt-1 text-lg font-extrabold text-brand-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </div>

        {/* Tablet and desktop layout mirrors the horizontal support journey. */}
        <div className="hidden md:block">
          <section className="how-hero section-soft">
            <div className="section-shell py-20 text-center lg:py-24">
              <p className="eyebrow justify-center">How it works</p>
              <h1 className="mx-auto mt-3 max-w-4xl text-[42px] font-extrabold leading-[1.04] tracking-[-.055em] text-brand-900 lg:text-[54px]">
                From Your Banking Problem <span className="block text-brand-500">To the Next Step.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">Watch our short walkthrough to understand how we help with your banking concern.</p>
              <button type="button" onClick={() => setIsVideoOpen(true)} className="group relative mx-auto mt-9 block w-full max-w-[820px] overflow-hidden rounded-2xl bg-brand-900 text-left shadow-[0_18px_46px_rgba(8,41,79,.2)]" aria-label="Play the How Dispute Paisa works video">
                <img src={videoPoster} alt="Video preview of Dispute Paisa support" className="aspect-[16/9] w-full object-cover opacity-70 transition duration-300 group-hover:scale-[1.02]" />
                <span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-500 shadow-xl"><Play className="ml-1" size={28} fill="currentColor" /></span></span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/90 to-transparent px-6 pb-5 pt-16 text-sm font-extrabold text-white">Watch how Dispute Paisa works</span>
              </button>
            </div>
          </section>

          <section className="section-shell py-14 lg:py-16">
            <div className="how-process-panel mx-auto max-w-[1450px]">
              <div className="text-center"><p className="eyebrow justify-center"><span className="h-px w-6 bg-brand-500" />Simple process</p><h2 className="mt-2 text-[38px] font-black tracking-[-.05em] text-brand-900">What happens next</h2><p className="mt-2 text-[15px] font-medium text-slate-500">Follow these simple steps and get the support you need.</p></div>
              <div className="how-stepper mt-8" role="tablist" aria-label="Query process steps">
                {steps.map(([number, title, , Icon], index) => (
                  <button type="button" key={number} onClick={() => setActiveStep(index)} className={index === activeStep ? "is-active" : index < activeStep ? "is-complete" : ""} role="tab" aria-selected={index === activeStep}>
                    <span><Icon size={18} /></span><strong>{title}</strong>
                  </button>
                ))}
              </div>
              <div className="how-step-grid mt-8">
                {steps.map(([number, title, text, Icon], index) => (
                  <article key={number} className={`how-step-card ${index === activeStep ? "is-active" : ""}`}>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-brand-500"><Icon size={23} /></div>
                    <span>STEP {number}</span><h3>{title}</h3><p>{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-6 rounded-2xl border border-brand-100 bg-brand-50 px-8 py-5">
                <div className="flex items-center gap-4"><Headphones size={48} className="text-brand-500" /><div><h3 className="text-lg font-extrabold text-brand-500">Need Help?</h3><p className="mt-1 text-sm text-slate-600">If you're not sure how to raise a query or which category fits your issue, our support team is here to help.</p></div></div>
                <a href="/#query" className="shrink-0 rounded-lg bg-brand-500 px-7 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-brand-600">Contact Support <ArrowRight className="ml-2 inline" size={16} /></a>
              </div>
            </div>
          </section>

          <section className="section-shell pb-16 lg:pb-20">
            <div className="mx-auto max-w-[1450px]"><p className="eyebrow"><span className="h-px w-6 bg-brand-500" />Common banking issues</p><div className="mt-2 flex items-end justify-between"><div><h2 className="text-[30px] font-extrabold tracking-[-.04em] text-brand-900">Facing any of these banking problems?</h2><p className="mt-1 text-sm text-slate-500">Select a category to learn more or raise a query directly.</p></div><a href="/#services" className="text-sm font-bold text-brand-500">View all issues <ArrowRight className="ml-1 inline" size={16} /></a></div>
              <div className="mt-5 grid grid-cols-3 gap-3 lg:grid-cols-6">{issues.slice(0, 6).map(({ title, text, icon: Icon }) => <a href="/#query" key={title} className="how-issue-card"><div className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 text-brand-500"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><ArrowRight size={16} /></a>)}</div>
            </div>
          </section>
        </div>
      </main>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="How Dispute Paisa works video">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button type="button" onClick={() => setIsVideoOpen(false)} className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-white transition hover:bg-black" aria-label="Close video">
              <X size={22} />
            </button>
            <video className="aspect-video w-full" controls autoPlay playsInline poster={videoPoster}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
