const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      `These Terms & Conditions ("Terms") govern your access to and use of the Dispute Paisa website and query-submission services (the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Services.`,
    ],
  },
  {
    title: "2. Nature of Our Services",
    body: [
      "Dispute Paisa is a facilitation platform that helps users describe and submit banking-related concerns — such as failed transactions, unauthorized debits, blocked accounts, card disputes, refund delays and similar issues — and track the status of such queries.",
    ],
    list: [
      "We are not a bank, NBFC, or financial institution and do not hold, transfer or process your funds.",
      "We do not replace, override or influence the internal grievance redressal mechanisms of any bank or the Banking Ombudsman.",
      "Our role is limited to guidance, documentation assistance, and coordination to help you navigate the resolution process.",
    ],
  },
  {
    title: "3. Eligibility & User Responsibilities",
    body: [
      "By using our Services, you confirm that you are at least 18 years of age and legally capable of entering into a binding agreement. You agree to:",
    ],
    list: [
      "Provide accurate, complete and truthful information in your query, including bank details and issue description.",
      "Upload only genuine and relevant supporting documents (receipts, screenshots, statements, etc.).",
      "Not use the Services for any fraudulent, unlawful, defamatory or misleading purpose.",
      "Keep your Query Reference ID confidential and use it only to track your own query.",
    ],
  },
  {
    title: "4. Query Submission & Resolution Process",
    body: [
      "Once you submit a query, it is reviewed internally and forwarded, where appropriate, to the relevant team or channel for follow-up. You will receive a unique Query Reference ID to track status updates.",
    ],
    list: [
      "Response and resolution timelines depend on the nature of the issue, the responsiveness of the concerned bank, and applicable regulatory processes — we do not control these external timelines.",
      "We do not guarantee any particular outcome, refund, reversal or resolution of your banking dispute.",
      "Final resolution of any dispute remains subject to the policies of the concerned bank and applicable RBI/Banking Ombudsman guidelines.",
    ],
  },
  {
    title: "5. Fees",
    body: [
      "Submitting a preliminary query and tracking its status through our platform is free of charge. If any paid, customized assistance or escalation service is offered, its scope and charges will be communicated transparently to you in advance, and no charges will be levied without your explicit consent.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, icons and design — is the property of Dispute Paisa or its licensors and is protected under applicable intellectual property laws. You may not copy, reproduce, distribute or create derivative works from our content without prior written permission.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Dispute Paisa shall not be liable for any direct, indirect, incidental or consequential loss or damage arising from:",
    ],
    list: [
      "Any delay, denial or outcome of a dispute by a bank or regulatory authority.",
      "Inaccurate or incomplete information provided by you in your query.",
      "Interruption, error or unavailability of the website or Services.",
      "Any unauthorized access to or use of your account or submitted information beyond our reasonable control.",
    ],
  },
  {
    title: "8. Indemnity",
    body: [
      "You agree to indemnify and hold Dispute Paisa, its employees and affiliates harmless from any claim, loss, liability or expense arising out of your breach of these Terms, misuse of the Services, or submission of false or misleading information.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "We reserve the right to suspend or restrict access to our Services, without prior notice, for any user who violates these Terms, submits fraudulent information, or misuses the platform.",
    ],
  },
  {
    title: "10. Governing Law & Jurisdiction",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may revise these Terms from time to time to reflect changes in our Services or legal requirements. The updated Terms will be posted on this page with a revised effective date, and continued use of the Services after such changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "12. Contact Us",
    body: [
      "For any questions regarding these Terms & Conditions, please reach out to us at:",
    ],
    list: [
      "Email: support@disputepaisa.com",
      "Phone: +91 XXXXX XXXXX",
      "Support Hours: Mon - Sat, 9AM - 6PM",
    ],
  },
];

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="section-soft">
        <div className="section-shell py-20 text-center lg:py-28">

          <p className="eyebrow justify-center">LEGAL</p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-[-.05em] text-brand-900 md:text-6xl">
            Terms &
            <span className="block text-brand-500">Conditions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Please read these terms carefully before using Dispute Paisa's
            website and query-submission services.
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
