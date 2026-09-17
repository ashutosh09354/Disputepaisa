import { ArrowRight } from "lucide-react";
import phoneImage from "../../assets/phone-support.png";
import { assistanceFeatures } from "../../data/constants";
import Button from "../ui/Button";

export default function Services() {
  return (
    <section className="section-shell py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="section-title">Banking dispute assistance</h2>
          <p className="section-copy mt-3">
            Guidance for a smoother, stress-free banking experience with expert support at every step.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {assistanceFeatures.map(([title, text, Icon]) => (
              <a href="#query" key={title} className="mini-service group">
                <span className="icon-circle"><Icon size={19} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </a>
            ))}
          </div>
          <Button className="mt-8">Raise a Query <ArrowRight size={15} /></Button>
        </div>
        <div className="image-card">
          <img src={phoneImage} alt="Dispute submitted confirmation on mobile" />
        </div>
      </div>
    </section>
  );
}
