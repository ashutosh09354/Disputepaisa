import { ArrowRight } from "lucide-react";
import { issues } from "../../data/constants";

export default function ProblemExplorer({ onIssue }) {
  return (
    <section className="section-shell py-11 md:py-16 lg:py-20" id="services">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">Facing any of these banking problems?</h2>
        <a
          href="#services"
          className="hidden shrink-0 text-sm font-bold text-brand-500 md:inline-flex items-center gap-1 hover:underline"
        >
          View all issues <ArrowRight size={14} />
        </a>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {issues.map(({ title, text, icon: Icon }) => (
          <button key={title} onClick={() => onIssue(title)} className="problem-card group flex items-center gap-3 p-4 text-left active:scale-[0.99] md:block md:p-5">
            <span className="icon-circle h-12 w-12 bg-brand-50 group-active:bg-brand-100 md:h-11 md:w-11"><Icon size={20} /></span>
            <span className="min-w-0 flex-1">
              <h3 className="mt-0 md:mt-4">{title}</h3>
              <p className="line-clamp-2">{text}</p>
            </span>
            <ArrowRight size={18} className="shrink-0 text-brand-500 md:hidden" />
          </button>
        ))}
      </div>
    </section>
  );
}
