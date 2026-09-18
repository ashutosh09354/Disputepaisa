// import { ChevronRight, FileText, MessageCircle, Search, Smartphone } from "lucide-react";

// const steps = [
//   ["Submit your query", "Tell us what happened through our secure form.", FileText],
//   ["Our team reviews", "Your query is forwarded to the appropriate team.", Search],
//   ["Get assistance", "Our team contacts you regarding the next steps.", MessageCircle],
//   ["Track until resolution", "Monitor progress until your issue is resolved.", Smartphone],
// ];

// export default function Process() {
//   return (
//     <section id="process" className="w-full border-y border-slate-100 section-soft">
//       <div className="section-shell py-16 lg:py-20">
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="section-title">
//             Tell us your problem.<br className="hidden sm:block" /> We'll help you navigate the next steps.
//           </h2>
//         </div>
//         <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           <div className="process-line hidden lg:block" />
//           {steps.map(([title, text, Icon], i) => (
//             <div key={title} className="relative z-10 text-center">
//               <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-white text-brand-500 shadow-soft ring-4 ring-white">
//                 <Icon size={28} />
//               </div>
//               {i < steps.length - 1 && (
//                 <ChevronRight size={20} className="process-arrow hidden lg:block" />
//               )}
//               <div className="mt-5 text-sm font-extrabold text-brand-900">{i + 1}. {title}</div>
//               <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-6 text-slate-600">{text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  ChevronRight,
  FileText,
  MessageCircle,
  Search,
  Smartphone,
  Play,
  ArrowRight,
} from "lucide-react";

const steps = [
  [
    "Submit your query",
    "Tell us what happened through our secure form.",
    FileText,
  ],
  [
    "Our team reviews",
    "Your query is forwarded to the appropriate team.",
    Search,
  ],
  [
    "Get assistance",
    "Our team contacts you regarding the next steps.",
    MessageCircle,
  ],
  [
    "Track until resolution",
    "Monitor progress until your issue is resolved.",
    Smartphone,
  ],
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full border-y border-slate-100 section-soft"
    >
      <div className="section-shell py-11 md:py-16 lg:py-20">

        {/* Heading */}
        <div className="mb-7 md:mb-10">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2 className="section-title mt-2">
            Tell us your problem.
            <br />
            We'll help you navigate the next steps.
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-7 md:gap-10 lg:grid-cols-[1fr_1.05fr]">

          {/* LEFT - PROCESS */}
          <div className="relative">

            <div className="process-line hidden lg:block" />

            <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-7">

              {steps.map(([title, text, Icon], i) => (
                <div
                  key={title}
                  className="relative z-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition duration-200 active:scale-[0.99] sm:p-5 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
                >

                  <div className="flex items-start gap-4">

                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                      <Icon size={22} />
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-brand-500">
                        STEP {String(i + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-1 text-sm font-extrabold text-brand-900">
                        {title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-slate-500">
                        {text}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT - YOUTUBE VIDEO */}
          <div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-soft">

              <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">

                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="How Dispute Paisa Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>

            </div>

            {/* Video CTA */}
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h3 className="text-sm font-extrabold text-brand-900">
                  See how Dispute Paisa works
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Watch the complete process and understand what happens after
                  you raise a query.
                </p>
              </div>

              <a
                href="/how-it-works"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-xs font-extrabold text-white transition hover:bg-brand-600"
              >
                View Full Process
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
