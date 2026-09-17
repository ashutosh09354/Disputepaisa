export default function Field({ label, placeholder, type = "text", required }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} placeholder={placeholder} required={required} />
    </label>
  );
}
