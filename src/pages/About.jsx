import { ArrowRight, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import Button from "../components/ui/Button";

const values = [
  [ShieldCheck, "Clear guidance", "We help you understand the next step for your banking concern in plain language."],
  [HeartHandshake, "Support that listens", "Every query deserves patient attention, practical guidance and transparent follow-up."],
  [Users, "Built for everyday customers", "Our process is designed to make raising and tracking a concern feel straightforward."],
];

export default function About() {
  return (
    <main className="bg-white">
      <section className="section-soft">
        <div className="section-shell py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">About Dispute Paisa</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-[-.05em] text-brand-900 md:text-6xl">
              Clear support for your <span className="text-brand-500">banking concerns.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Dispute Paisa helps people take the right next step when a banking transaction, account or service does not go as expected.
            </p>
            <Button href="/#query" className="mt-8">Raise a query <ArrowRight size={17} /></Button>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Our purpose</p>
            <h2 className="section-title mt-3">Making the dispute journey easier to understand.</h2>
          </div>
          <div className="space-y-5 text-[15px] leading-7 text-slate-600">
            <p>Banking issues can be stressful, especially when the right information or next step is unclear. Our role is to give you a simple, structured way to share your concern and understand how to move forward.</p>
            <p>From submitting the relevant details to tracking your query, Dispute Paisa is designed to keep the journey secure, transparent and easy to follow.</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-brand-900 px-6 py-10 md:px-10 md:py-12">
          <p className="eyebrow text-brand-300">What guides us</p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {values.map(([Icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-brand-300"><Icon size={22} /></span>
                <h3 className="mt-5 font-extrabold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
