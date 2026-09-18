// const variants = {
//   primary: "bg-brand-500 text-white shadow-[0_8px_22px_rgba(20,119,232,.2)] hover:bg-brand-600",
//   outline: "border border-brand-500/30 bg-white text-brand-700 hover:bg-brand-50",
//   white: "bg-white text-brand-700 hover:bg-brand-50",
//   whiteOutline: "border border-white/40 bg-transparent text-white hover:bg-white/10",
// };

// export default function Button({ children, variant = "primary", href = "#query", className = "" }) {
//   return (
//     <a
//       href={href}
//       className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
//     >
//       {children}
//     </a>
//   );
// }


const variants = {
  primary: "bg-brand-500 text-white shadow-[0_8px_22px_rgba(20,119,232,.2)] hover:bg-brand-600",
  outline: "border border-brand-500/30 bg-white text-brand-700 hover:bg-brand-50",
  white: "bg-white text-brand-700 hover:bg-brand-50",
  whiteOutline: "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type,
  disabled,
  onClick,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className} ${disabled ? "cursor-not-allowed opacity-60" : ""}`;

  // If a type ("submit"/"button") or onClick is given, render a real <button>
  // so it works inside forms and doesn't just navigate like a link.
  if (type || onClick) {
    return (
      <button type={type || "button"} className={classes} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <a href={href || "#query"} className={classes}>
      {children}
    </a>
  );
}