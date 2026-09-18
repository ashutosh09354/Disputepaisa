const sections = [
  {
    title: "1. Introduction",
    body: [
      `Dispute Paisa ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use and store it, and the choices you have when you use our website and query-submission services (the "Services").`,
      `By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with any part of this policy, please do not use our Services.`,
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect the following categories of information when you raise a query or interact with us:",
    ],
    list: [
      "Personal details — name, email address, phone number and registered address.",
      "Banking-related details — bank name, account/card reference, transaction details and issue description that you voluntarily provide to help us understand your dispute.",
      "Supporting documents — receipts, screenshots, statements or other files you choose to upload.",
      "Technical data — IP address, browser type, device information and usage data collected automatically through cookies and similar technologies.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["We use the information collected for the following purposes:"],
    list: [
      "To process and respond to the banking query or dispute you raise with us.",
      "To generate and share your unique Query Reference ID and status updates.",
      "To contact you regarding next steps, clarifications, or resolution updates.",
      "To improve our website, Services and customer experience.",
      "To comply with applicable legal and regulatory obligations.",
    ],
  },
  {
    title: "4. Data Sharing & Disclosure",
    body: [
      "We do not sell your personal information. We may share your information only in the following limited circumstances:",
    ],
    list: [
      "With the relevant bank, financial institution or regulatory body (such as RBI or the Banking Ombudsman) where necessary to assist with the resolution of your query.",
      "With trusted service providers who help us operate our Services, under confidentiality obligations.",
      "Where required by law, court order or governmental authority.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We follow bank-grade security practices, including encryption in transit, restricted access controls and secure storage, to protect your personal details and uploaded documents from unauthorized access, alteration or disclosure. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, resolve your query, and comply with our legal and regulatory obligations. Once no longer required, information is securely deleted or anonymized.",
    ],
  },
  {
    title: "7. Cookies",
    body: [
      "Our website may use cookies and similar technologies to remember your preferences and understand how visitors use our Services. You can control or disable cookies through your browser settings; however, some features of the website may not function properly if cookies are disabled.",
    ],
  },
  {
    title: "8. Your Rights",
    body: ["You have the right to:"],
    list: [
      "Request access to the personal information we hold about you.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of your personal information, subject to any legal or regulatory retention requirements.",
      "Withdraw consent for optional communications at any time.",
    ],
  },
  {
    title: "9. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites, including bank portals or regulatory bodies. We are not responsible for the privacy practices or content of such third-party websites and encourage you to review their respective privacy policies.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with a revised effective date. Continued use of our Services after such changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at:",
    ],
    list: [
      "Email: support@disputepaisa.com",
      "Phone: +91 XXXXX XXXXX",
      "Support Hours: Mon - Sat, 9AM - 6PM",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="section-soft">
        <div className="section-shell py-20 text-center lg:py-28">

          <p className="eyebrow justify-center">LEGAL</p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-[-.05em] text-brand-900 md:text-6xl">
            Privacy
            <span className="block text-brand-500">Policy.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Understand what information we collect, how we use it, and how we
            keep it safe when you use Dispute Paisa.
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
