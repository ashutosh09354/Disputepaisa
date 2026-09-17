import { ArrowRight } from "lucide-react";
import { issues } from "../../data/constants";

export default function ProblemExplorer({ onIssue }) {
  return (
    <section className="section-shell py-16 lg:py-20" id="services">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">Facing any of these banking problems?</h2>
        <a
          href="#services"
          className="hidden shrink-0 text-sm font-bold text-brand-500 md:inline-flex items-center gap-1 hover:underline"
        >
          View all issues <ArrowRight size={14} />
        </a>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {issues.map(({ title, text, icon: Icon }) => (
          <button key={title} onClick={() => onIssue(title)} className="problem-card group text-left">
            <span className="icon-circle"><Icon size={20} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
