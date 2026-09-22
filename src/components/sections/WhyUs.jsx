import { Building2, Headphones, ShieldCheck, Zap } from "lucide-react";

const features = [
  ["Secure & Reliable", "Your information is handled with utmost confidentiality.", ShieldCheck],
  ["Fast & Simple", "Raise your query without complicated procedures.", Zap],
  ["Expert Guidance", "Get guidance regarding banking-related concerns.", Headphones],
  ["All Major Banks", "Support for SBI, HDFC, ICICI, Axis and more.", Building2],
];

export default function WhyUs() {
  return (
    <section id="about" className="section-shell py-10 md:py-12 lg:py-14">
      <div className="text-center">
        <h2 className="section-title">Why choose DisputePaisa?</h2>
        <p className="section-copy mx-auto mt-3">
          Trusted by thousands of customers across India for banking dispute assistance.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(([title, text, Icon]) => (
          <div className="why-card text-center" key={title}>
            <span className="icon-circle mx-auto"><Icon size={20} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
