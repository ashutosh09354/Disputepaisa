// // export default function Field({ label, placeholder, type = "text", required }) {
// //   return (
// //     <label className="field">
// //       <span>{label}</span>
// //       <input type={type} placeholder={placeholder} required={required} />
// //     </label>
// //   );
// // }


// export default function Field({ label, name, placeholder, type = "text", required }) {
//   return (
//     <label className="field">
//       <span>{label}</span>
//       <input type={type} name={name} placeholder={placeholder} required={required} />
//     </label>
//   );
// }


export default function Field({ label, name, placeholder, type = "text", required, className = "" }) {
  return (
    <label className={`field ${className}`}>
      <span>{label}</span>
      <input type={type} name={name} placeholder={placeholder} required={required} />
    </label>
  );
}