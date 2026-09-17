import logoImg from "../../assets/logo.png";

export default function Logo({ light = false, className = "" }) {
  return (
    <a href="#home" className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src={logoImg}
        alt="Dispute Paisa Logo"
        className={`h-9 w-auto object-contain ${light ? "brightness-0 invert opacity-90" : ""}`}
      />
    </a>
  );
}
