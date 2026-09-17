import { useState } from "react";
import { ArrowRight, Check, Upload } from "lucide-react";
import { banks, issues, queryBenefits } from "../../data/constants";
import Button from "../ui/Button";
import Field from "../ui/Field";

function QuerySuccess({ queryId }) {
  return (
    <section id="query" className="section-shell py-16 lg:py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
          <Check size={30} />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
        <p className="mt-3 text-slate-600">
          Your query reference ID has been generated. Use it to track your query status.
        </p>
        <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
          <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
          <Button variant="outline" href="#home">Return Home</Button>
        </div>
      </div>
    </section>
  );
}

export default function QueryForm({ selectedIssue }) {
  const [submitted, setSubmitted] = useState(false);
  const [issue, setIssue] = useState(selectedIssue || "");
  const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

  if (submitted) {
    return <QuerySuccess queryId={queryId} />;
  }

  return (
    <section id="query" className="w-full section-soft">
      <div className="section-shell py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="section-title">Raise your banking query</h2>
            <p className="section-copy mt-3">
              Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
            </p>
            <div className="mt-8 space-y-4">
              {queryBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
                    <Check size={14} />
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="form-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" placeholder="Enter your full name" required />
              <Field label="Mobile Number" placeholder="Enter 10 digit mobile number" required />
              <Field label="Email Id" placeholder="Enter your email address" type="email" required />
              <label className="field">
                <span>Select Bank</span>
                <select required>
                  <option value="">Choose your bank</option>
                  {banks.map((bank) => <option key={bank}>{bank}</option>)}
                </select>
              </label>
              <label className="field sm:col-span-2">
                <span>Select Issue Type</span>
                <select value={issue} onChange={(e) => setIssue(e.target.value)} required>
                  <option value="">Choose issue type</option>
                  {issues.map((item) => (
                    <option key={item.title} value={item.title}>{item.title}</option>
                  ))}
                </select>
              </label>
              <label className="field sm:col-span-2">
                <span>Describe your issue</span>
                <textarea required placeholder="Please describe your issue in detail..." />
              </label>
              <label className="upload sm:col-span-2">
                <Upload size={22} className="text-brand-500" />
                <span>
                  <b>Upload Documents</b>
                  <small>Click to upload or drag and drop PDF, JPG or PNG</small>
                </span>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600"
            >
              Submit Query <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
