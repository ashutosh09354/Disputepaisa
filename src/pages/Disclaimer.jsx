const sections = [
  {
    title: "1. General Information",
    body: [
      "The information provided on the Dispute Paisa website and through our query-submission Services is for general informational and facilitation purposes only. While we strive to keep the information accurate and up to date, we make no warranties or representations of any kind, express or implied, about the completeness, accuracy, reliability or availability of the content, Services or related graphics.",
    ],
  },
  {
    title: "2. Not a Bank or Financial Institution",
    body: [
      "Dispute Paisa is an independent facilitation platform and is not a bank, NBFC, payment processor, or financial institution. We do not hold, transfer, freeze or release any funds on behalf of users.",
    ],
    list: [
      "We are not affiliated with, endorsed by, or acting on behalf of any bank named on this website (including SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra or others) unless explicitly stated.",
      "Bank names and logos, where referenced, are used solely for identification purposes to help you describe your banking issue accurately.",
    ],
  },
  {
    title: "3. No Guarantee of Resolution",
    body: [
      "Submitting a query through Dispute Paisa does not guarantee that your banking dispute will be resolved, reversed, refunded or decided in your favour. Final decisions regarding your dispute rest solely with the concerned bank and, where applicable, the Reserve Bank of India (RBI) or the Banking Ombudsman, in accordance with their own policies, timelines and regulatory guidelines.",
    ],
  },
  {
    title: "4. Not Legal or Financial Advice",
    body: [
      "Nothing on this website or provided through our Services constitutes legal, financial or professional advice. You should independently verify information and, where necessary, consult a qualified professional before making decisions related to your banking or financial matters.",
    ],
  },
  {
    title: "5. User-Submitted Content",
    body: [
      "Any information, description or document you submit through our query form is provided by you voluntarily and is assumed to be true, accurate and complete. We rely on this information as provided and are not responsible for any consequence arising from incomplete, inaccurate or misleading information submitted by users.",
    ],
  },
  {
    title: "6. Third-Party Links & References",
    body: [
      "Our website may reference or link to third-party websites, including official bank portals, RBI resources or the Banking Ombudsman scheme, for your convenience. We do not control and are not responsible for the content, accuracy or practices of any third-party website.",
    ],
  },
  {
    title: "7. Service Availability",
    body: [
      "We aim to keep our website and Services available at all times but do not guarantee uninterrupted, error-free or timely access. We shall not be liable for any loss or inconvenience arising from downtime, technical errors or maintenance activities.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, Dispute Paisa and its team shall not be liable for any loss, damage or expense — direct or indirect — arising from your reliance on the information provided on this website or from the outcome of any banking dispute submitted through our Services.",
    ],
  },
  {
    title: "9. Changes to This Disclaimer",
    body: [
      "We may update this Disclaimer periodically to reflect changes in our Services or applicable regulations. Any revisions will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have questions about this Disclaimer, please contact us at:",
    ],
    list: [
      "Email: support@disputepaisa.com",
      "Phone: +91 XXXXX XXXXX",
      "Support Hours: Mon - Sat, 9AM - 6PM",
    ],
  },
];

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="section-soft">
        <div className="section-shell py-20 text-center lg:py-28">

          <p className="eyebrow justify-center">LEGAL</p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-[-.05em] text-brand-900 md:text-6xl">
            Disclaimer.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Please read this disclaimer carefully to understand the scope and
            limitations of Dispute Paisa's Services.
          </p>

          <p className="mx-auto mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Last Updated: January 2026
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="section-shell py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {sections.map(({ title, body, list }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
            >
              <h2 className="text-xl font-extrabold text-brand-900">{title}</h2>

              {body.map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-6 text-slate-600">
                  {para}
                </p>
              ))}

              {list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
