import { useState } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Login() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="section-soft flex min-h-[calc(100vh-72px)] items-center py-12 md:py-16">
      <div className="section-shell">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_55px_rgba(8,41,79,0.13)] md:grid-cols-[0.9fr_1.1fr]">
          <aside className="hidden bg-brand-900 p-10 text-white md:block lg:p-14">
            <p className="eyebrow text-brand-300">Welcome back</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-.045em]">Track your banking concern with confidence.</h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">Sign in to view your submitted queries and stay updated on their progress.</p>
          </aside>

          <section className="p-6 sm:p-10 lg:p-14">
            <p className="eyebrow">Account login</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-[-.04em] text-brand-900">Sign in to your account</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">Use the email address and password associated with your account.</p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <label className="field">
                <span>Email address</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input className="pl-11" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
              </label>
              <label className="field">
                <span>Password</span>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input className="pl-11" type="password" autoComplete="current-password" placeholder="Enter your password" required />
                </div>
              </label>
              <div className="flex items-center justify-between gap-4 text-xs">
                <label className="flex items-center gap-2 text-slate-600"><input type="checkbox" className="accent-brand-500" /> Remember me</label>
                <a href="mailto:support@disputepaisa.com?subject=Password%20reset" className="font-bold text-brand-500 hover:text-brand-600">Forgot password?</a>
              </div>
              <Button type="submit" className="w-full">Sign in</Button>
              {submitted && <p className="rounded-xl bg-brand-50 p-3 text-center text-xs font-semibold text-brand-700">Login is ready for backend authentication. Please connect your account service to enable sign-in.</p>}
            </form>

            <p className="mt-7 text-center text-sm text-slate-600">Need help with a banking concern? <Link to="/#query" className="font-bold text-brand-500 hover:text-brand-600">Raise a query</Link></p>
          </section>
        </div>
      </div>
    </main>
  );
}
