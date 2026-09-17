import { ChevronRight, FileText, MessageCircle, Search, Smartphone } from "lucide-react";

const steps = [
  ["Submit your query", "Tell us what happened through our secure form.", FileText],
  ["Our team reviews", "Your query is forwarded to the appropriate team.", Search],
  ["Get assistance", "Our team contacts you regarding the next steps.", MessageCircle],
  ["Track until resolution", "Monitor progress until your issue is resolved.", Smartphone],
];

export default function Process() {
  return (
    <section id="process" className="w-full border-y border-slate-100 section-soft">
      <div className="section-shell py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            Tell us your problem.<br className="hidden sm:block" /> We'll help you navigate the next steps.
          </h2>
        </div>
        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="process-line hidden lg:block" />
          {steps.map(([title, text, Icon], i) => (
            <div key={title} className="relative z-10 text-center">
              <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-white text-brand-500 shadow-soft ring-4 ring-white">
                <Icon size={28} />
              </div>
              {i < steps.length - 1 && (
                <ChevronRight size={20} className="process-arrow hidden lg:block" />
              )}
              <div className="mt-5 text-sm font-extrabold text-brand-900">{i + 1}. {title}</div>
              <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
