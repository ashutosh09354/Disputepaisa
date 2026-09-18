import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

export default function Logo({ light = false, className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src={logoImg}
        alt="Dispute Paisa Logo"
        className={`h-9 w-auto object-contain ${light ? "brightness-0 invert opacity-90" : ""}`}
      />
    </Link>
  );
}
