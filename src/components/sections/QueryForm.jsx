// // // import { useState } from "react";
// // // import { ArrowRight, Check, Upload } from "lucide-react";
// // // import { banks, issues, queryBenefits } from "../../data/constants";
// // // import Button from "../ui/Button";
// // // import Field from "../ui/Field";

// // // function QuerySuccess({ queryId }) {
// // //   return (
// // //     <section id="query" className="section-shell py-16 lg:py-20">
// // //       <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
// // //         <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
// // //           <Check size={30} />
// // //         </div>
// // //         <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
// // //         <p className="mt-3 text-slate-600">
// // //           Your query reference ID has been generated. Use it to track your query status.
// // //         </p>
// // //         <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
// // //           <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
// // //           <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
// // //         </div>
// // //         <div className="mt-6 flex justify-center gap-3">
// // //           <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
// // //           <Button variant="outline" href="#home">Return Home</Button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default function QueryForm({ selectedIssue }) {
// // //   const [submitted, setSubmitted] = useState(false);
// // //   const [issue, setIssue] = useState(selectedIssue || "");
// // //   const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

// // //   if (submitted) {
// // //     return <QuerySuccess queryId={queryId} />;
// // //   }

// // //   return (
// // //     <section id="query" className="w-full section-soft">
// // //       <div className="section-shell py-16 lg:py-20">
// // //         <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
// // //           <div>
// // //             <h2 className="section-title">Raise your banking query</h2>
// // //             <p className="section-copy mt-3">
// // //               Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
// // //             </p>
// // //             <div className="mt-8 space-y-4">
// // //               {queryBenefits.map((benefit) => (
// // //                 <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
// // //                   <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
// // //                     <Check size={14} />
// // //                   </span>
// // //                   {benefit}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <form
// // //             onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
// // //             className="form-card"
// // //           >
// // //             <div className="grid gap-4 sm:grid-cols-2">
// // //               <Field label="Full Name" placeholder="Enter your full name" required />
// // //               <Field label="Mobile Number" placeholder="Enter 10 digit mobile number" required />
// // //               <Field label="Email Id" placeholder="Enter your email address" type="email" required />
// // //               <label className="field">
// // //                 <span>Select Bank</span>
// // //                 <select required>
// // //                   <option value="">Choose your bank</option>
// // //                   {banks.map((bank) => <option key={bank}>{bank}</option>)}
// // //                 </select>
// // //               </label>
// // //               <label className="field sm:col-span-2">
// // //                 <span>Select Issue Type</span>
// // //                 <select value={issue} onChange={(e) => setIssue(e.target.value)} required>
// // //                   <option value="">Choose issue type</option>
// // //                   {issues.map((item) => (
// // //                     <option key={item.title} value={item.title}>{item.title}</option>
// // //                   ))}
// // //                 </select>
// // //               </label>
// // //               <label className="field sm:col-span-2">
// // //                 <span>Describe your issue</span>
// // //                 <textarea required placeholder="Please describe your issue in detail..." />
// // //               </label>
// // //               <label className="upload sm:col-span-2">
// // //                 <Upload size={22} className="text-brand-500" />
// // //                 <span>
// // //                   <b>Upload Documents</b>
// // //                   <small>Click to upload or drag and drop PDF, JPG or PNG</small>
// // //                 </span>
// // //                 <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
// // //               </label>
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600"
// // //             >
// // //               Submit Query <ArrowRight size={16} />
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }






// // import { useState } from "react";
// // import { ArrowRight, Check, Upload } from "lucide-react";
// // import { banks, issues, queryBenefits } from "../../data/constants";
// // import Button from "../ui/Button";
// // import Field from "../ui/Field";

// // // Paste the Web App URL you copied after deploying the Apps Script
// // // (the one ending in /exec, NOT the Deployment ID).
// // const GOOGLE_SHEET_WEB_APP_URL =
// //   "https://script.google.com/macros/s/AKfycbxWFQjc0Dg2OSX-EUuIscQD2ii3cVSv9HbPDnBrzd_lUhYONcuwNvY-tlUN2NI9GbWm0A/exec";

// // function QuerySuccess({ queryId }) {
// //   return (
// //     <section id="query" className="section-shell py-16 lg:py-20">
// //       <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
// //         <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
// //           <Check size={30} />
// //         </div>
// //         <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
// //         <p className="mt-3 text-slate-600">
// //           Your query reference ID has been generated. Use it to track your query status.
// //         </p>
// //         <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
// //           <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
// //           <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
// //         </div>
// //         <div className="mt-6 flex justify-center gap-3">
// //           <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
// //           <Button variant="outline" href="#home">Return Home</Button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default function QueryForm({ selectedIssue }) {
// //   const [submitted, setSubmitted] = useState(false);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [error, setError] = useState("");
// //   const [issue, setIssue] = useState(selectedIssue || "");
// //   const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

// //   async function handleSubmit(e) {
// //     e.preventDefault();
// //     setError("");
// //     setSubmitting(true);

// //     const formData = new FormData(e.target);
// //     formData.append("queryId", queryId);
// //     const file = e.target.document?.files?.[0];
// //     formData.delete("document"); // the file itself isn't sent, only its name
// //     formData.append("documentName", file ? file.name : "");

// //     try {
// //       await fetch(GOOGLE_SHEET_WEB_APP_URL, {
// //         method: "POST",
// //         mode: "no-cors", // Apps Script doesn't send CORS headers, so we can't read the response
// //         body: formData,
// //       });
// //       setSubmitted(true);
// //     } catch (err) {
// //       setError("Something went wrong while submitting. Please check your connection and try again.");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   }

// //   if (submitted) {
// //     return <QuerySuccess queryId={queryId} />;
// //   }

// //   return (
// //     <section id="query" className="w-full section-soft">
// //       <div className="section-shell py-16 lg:py-20">
// //         <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
// //           <div>
// //             <h2 className="section-title">Raise your banking query</h2>
// //             <p className="section-copy mt-3">
// //               Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
// //             </p>
// //             <div className="mt-8 space-y-4">
// //               {queryBenefits.map((benefit) => (
// //                 <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
// //                   <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
// //                     <Check size={14} />
// //                   </span>
// //                   {benefit}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <form onSubmit={handleSubmit} className="form-card">
// //             <div className="grid gap-4 sm:grid-cols-2">
// //               <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
// //               <Field label="Mobile Number" name="mobile" placeholder="Enter 10 digit mobile number" required />
// //               <Field label="Email Id" name="email" placeholder="Enter your email address" type="email" required />
// //               <label className="field">
// //                 <span>Select Bank</span>
// //                 <select name="bank" required>
// //                   <option value="">Choose your bank</option>
// //                   {banks.map((bank) => <option key={bank}>{bank}</option>)}
// //                 </select>
// //               </label>
// //               <label className="field sm:col-span-2">
// //                 <span>Select Issue Type</span>
// //                 <select name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required>
// //                   <option value="">Choose issue type</option>
// //                   {issues.map((item) => (
// //                     <option key={item.title} value={item.title}>{item.title}</option>
// //                   ))}
// //                 </select>
// //               </label>
// //               <label className="field sm:col-span-2">
// //                 <span>Describe your issue</span>
// //                 <textarea name="description" required placeholder="Please describe your issue in detail..." />
// //               </label>
// //               <label className="upload sm:col-span-2">
// //                 <Upload size={22} className="text-brand-500" />
// //                 <span>
// //                   <b>Upload Documents</b>
// //                   <small>Click to upload or drag and drop PDF, JPG or PNG</small>
// //                 </span>
// //                 <input type="file" name="document" accept=".pdf,.jpg,.jpeg,.png" />
// //               </label>
// //             </div>
// //             {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
// //             <button
// //               type="submit"
// //               disabled={submitting}
// //               className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
// //             >
// //               {submitting ? "Submitting..." : "Submit Query"} <ArrowRight size={16} />
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }






// // import { useState } from "react";
// // import { ArrowRight, Check, Upload } from "lucide-react";
// // import { banks, issues, queryBenefits } from "../../data/constants";
// // import Button from "../ui/Button";
// // import Field from "../ui/Field";

// // // Paste the Web App URL you copied after deploying the Apps Script
// // // (the one ending in /exec, NOT the Deployment ID).
// // const GOOGLE_SHEET_WEB_APP_URL =
// //   "https://script.google.com/macros/s/AKfycbxWFQjc0Dg2OSX-EUuIscQD2ii3cVSv9HbPDnBrzd_lUhYONcuwNvY-tlUN2NI9GbWm0A/exec";

// // // Reads a File object and resolves to its base64 string (without the data: prefix)
// // function fileToBase64(file) {
// //   return new Promise((resolve, reject) => {
// //     const reader = new FileReader();
// //     reader.onload = () => resolve(reader.result.split(",")[1]);
// //     reader.onerror = reject;
// //     reader.readAsDataURL(file);
// //   });
// // }

// // function QuerySuccess({ queryId }) {
// //   return (
// //     <section id="query" className="section-shell py-16 lg:py-20">
// //       <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
// //         <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
// //           <Check size={30} />
// //         </div>
// //         <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
// //         <p className="mt-3 text-slate-600">
// //           Your query reference ID has been generated. Use it to track your query status.
// //         </p>
// //         <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
// //           <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
// //           <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
// //         </div>
// //         <div className="mt-6 flex justify-center gap-3">
// //           <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
// //           <Button variant="outline" href="#home">Return Home</Button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default function QueryForm({ selectedIssue }) {
// //   const [submitted, setSubmitted] = useState(false);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [error, setError] = useState("");
// //   const [issue, setIssue] = useState(selectedIssue || "");
// //   const [fileName, setFileName] = useState("");
// //   const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

// //   async function handleSubmit(e) {
// //     e.preventDefault();
// //     setError("");
// //     setSubmitting(true);

// //     try {
// //       const formEl = e.target;
// //       const formData = new FormData(formEl);
// //       formData.append("queryId", queryId);

// //       const file = formEl.document?.files?.[0];
// //       formData.delete("document"); // raw File objects can't be read by Apps Script directly

// //       if (file) {
// //         // 5MB safety cap: base64 + Apps Script payload limits make large files unreliable
// //         if (file.size > 5 * 1024 * 1024) {
// //           throw new Error("Please upload a file smaller than 5MB.");
// //         }
// //         const base64 = await fileToBase64(file);
// //         formData.append("fileData", base64);
// //         formData.append("fileName", file.name);
// //         formData.append("fileType", file.type);
// //       }

// //       await fetch(GOOGLE_SHEET_WEB_APP_URL, {
// //         method: "POST",
// //         mode: "no-cors", // Apps Script doesn't send CORS headers, so we can't read the response
// //         body: formData,
// //       });
// //       setSubmitted(true);
// //     } catch (err) {
// //       setError(err.message || "Something went wrong while submitting. Please check your connection and try again.");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   }

// //   if (submitted) {
// //     return <QuerySuccess queryId={queryId} />;
// //   }

// //   return (
// //     <section id="query" className="w-full section-soft">
// //       <div className="section-shell py-16 lg:py-20">
// //         <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
// //           <div>
// //             <h2 className="section-title">Raise your banking query</h2>
// //             <p className="section-copy mt-3">
// //               Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
// //             </p>
// //             <div className="mt-8 space-y-4">
// //               {queryBenefits.map((benefit) => (
// //                 <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
// //                   <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
// //                     <Check size={14} />
// //                   </span>
// //                   {benefit}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <form onSubmit={handleSubmit} className="form-card">
// //             <div className="grid gap-4 sm:grid-cols-2">
// //               <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
// //               <Field label="Mobile Number" name="mobile" placeholder="Enter 10 digit mobile number" required />
// //               <Field label="Email Id" name="email" placeholder="Enter your email address" type="email" required />
// //               <label className="field">
// //                 <span>Select Bank</span>
// //                 <select name="bank" required>
// //                   <option value="">Choose your bank</option>
// //                   {banks.map((bank) => <option key={bank}>{bank}</option>)}
// //                 </select>
// //               </label>
// //               <label className="field sm:col-span-2">
// //                 <span>Select Issue Type</span>
// //                 <select name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required>
// //                   <option value="">Choose issue type</option>
// //                   {issues.map((item) => (
// //                     <option key={item.title} value={item.title}>{item.title}</option>
// //                   ))}
// //                 </select>
// //               </label>
// //               <label className="field sm:col-span-2">
// //                 <span>Describe your issue</span>
// //                 <textarea name="description" required placeholder="Please describe your issue in detail..." />
// //               </label>
// //               <label className="upload sm:col-span-2">
// //                 <Upload size={22} className="text-brand-500" />
// //                 <span>
// //                   <b>Upload Documents (Optional)</b>
// //                   <small>{fileName || "Click to upload or drag and drop PDF, JPG or PNG"}</small>
// //                 </span>
// //                 <input
// //                   type="file"
// //                   name="document"
// //                   accept=".pdf,.jpg,.jpeg,.png"
// //                   onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
// //                 />
// //               </label>
// //             </div>
// //             {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
// //             <button
// //               type="submit"
// //               disabled={submitting}
// //               className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
// //             >
// //               {submitting ? "Submitting..." : "Submit Query"} <ArrowRight size={16} />
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }






// import { useState } from "react";
// import { ArrowRight, Check, Upload } from "lucide-react";
// import { issues, queryBenefits } from "../../data/constants";
// import Button from "../ui/Button";
// import Field from "../ui/Field";

// // Paste the Web App URL you copied after deploying the Apps Script
// // (the one ending in /exec, NOT the Deployment ID).
// const GOOGLE_SHEET_WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbxWFQjc0Dg2OSX-EUuIscQD2ii3cVSv9HbPDnBrzd_lUhYONcuwNvY-tlUN2NI9GbWm0A/exec";

// function QuerySuccess({ queryId }) {
//   return (
//     <section id="query" className="section-shell py-16 lg:py-20">
//       <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
//         <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
//           <Check size={30} />
//         </div>
//         <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
//         <p className="mt-3 text-slate-600">
//           Your query reference ID has been generated. Use it to track your query status.
//         </p>
//         <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
//           <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
//           <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
//         </div>
//         <div className="mt-6 flex justify-center gap-3">
//           <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
//           <Button variant="outline" href="#home">Return Home</Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function QueryForm({ selectedIssue }) {
//   const [submitted, setSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [issue, setIssue] = useState(selectedIssue || "");
//   const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     setSubmitting(true);

//     const formData = new FormData(e.target);
//     formData.append("queryId", queryId);
//     const file = e.target.document?.files?.[0];
//     formData.delete("document"); // the file itself isn't sent, only its name
//     formData.append("documentName", file ? file.name : "");

//     try {
//       await fetch(GOOGLE_SHEET_WEB_APP_URL, {
//         method: "POST",
//         mode: "no-cors", // Apps Script doesn't send CORS headers, so we can't read the response
//         body: formData,
//       });
//       setSubmitted(true);
//     } catch (err) {
//       setError("Something went wrong while submitting. Please check your connection and try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   if (submitted) {
//     return <QuerySuccess queryId={queryId} />;
//   }

//   return (
//     <section id="query" className="w-full section-soft">
//       <div className="section-shell py-16 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
//           <div>
//             <h2 className="section-title">Raise your banking query</h2>
//             <p className="section-copy mt-3">
//               Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
//             </p>
//             <div className="mt-8 space-y-4">
//               {queryBenefits.map((benefit) => (
//                 <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
//                   <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
//                     <Check size={14} />
//                   </span>
//                   {benefit}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="form-card">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Full Name" name="fullName" placeholder="Enter your full name" required className="sm:col-span-2" />
//               <Field label="Mobile Number" name="mobile" placeholder="Enter 10 digit mobile number" required />
//               <Field label="Email Id" name="email" placeholder="Enter your email address" type="email" required />
//               <label className="field sm:col-span-2">
//                 <span>Select Issue Type</span>
//                 <select name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required>
//                   <option value="">Choose issue type</option>
//                   {issues.map((item) => (
//                     <option key={item.title} value={item.title}>{item.title}</option>
//                   ))}
//                 </select>
//               </label>
//               <label className="field sm:col-span-2">
//                 <span>Describe your issue</span>
//                 <textarea name="description" required placeholder="Please describe your issue in detail..." />
//               </label>
//               <label className="upload sm:col-span-2">
//                 <Upload size={22} className="text-brand-500" />
//                 <span>
//                   <b>Upload Documents</b>
//                   <small>Click to upload or drag and drop PDF, JPG or PNG</small>
//                 </span>
//                 <input type="file" name="document" accept=".pdf,.jpg,.jpeg,.png" />
//               </label>
//             </div>
//             {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
//             <button
//               type="submit"
//               disabled={submitting}
//               className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {submitting ? "Submitting..." : "Submit Query"} <ArrowRight size={16} />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useState } from "react";
// import { ArrowRight, Check, Upload } from "lucide-react";
// import { issues, queryBenefits } from "../../data/constants";
// import Button from "../ui/Button";
// import Field from "../ui/Field";

// // Paste the Web App URL you copied after deploying the Apps Script
// // (the one ending in /exec, NOT the Deployment ID).
// const GOOGLE_SHEET_WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbxWFQjc0Dg2OSX-EUuIscQD2ii3cVSv9HbPDnBrzd_lUhYONcuwNvY-tlUN2NI9GbWm0A/exec";

// function QuerySuccess({ queryId }) {
//   return (
//     <section id="query" className="section-shell py-16 lg:py-20">
//       <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
//         <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
//           <Check size={30} />
//         </div>
//         <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
//         <p className="mt-3 text-slate-600">
//           Your query reference ID has been generated. Use it to track your query status.
//         </p>
//         <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
//           <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
//           <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
//         </div>
//         <div className="mt-6 flex justify-center gap-3">
//           <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
//           <Button variant="outline" href="#home">Return Home</Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function QueryForm({ selectedIssue }) {
//   const [submitted, setSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [issue, setIssue] = useState(selectedIssue || "");
//   const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     setSubmitting(true);

//     const formData = new FormData(e.target);
//     formData.append("queryId", queryId);
//     const file = e.target.document?.files?.[0];
//     formData.delete("document"); // the file itself isn't sent, only its name
//     formData.append("documentName", file ? file.name : "");

//     try {
//       await fetch(GOOGLE_SHEET_WEB_APP_URL, {
//         method: "POST",
//         mode: "no-cors", // Apps Script doesn't send CORS headers, so we can't read the response
//         body: formData,
//       });
//       setSubmitted(true);
//     } catch (err) {
//       setError("Something went wrong while submitting. Please check your connection and try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   if (submitted) {
//     return <QuerySuccess queryId={queryId} />;
//   }

//   return (
//     <section id="query" className="w-full section-soft">
//       <div className="section-shell py-16 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
//           <div>
//             <h2 className="section-title">Raise your banking query</h2>
//             <p className="section-copy mt-3">
//               Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
//             </p>
//             <div className="mt-8 space-y-4">
//               {queryBenefits.map((benefit) => (
//                 <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
//                   <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
//                     <Check size={14} />
//                   </span>
//                   {benefit}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="form-card">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
//               <Field label="Mobile Number" name="mobile" placeholder="Enter 10 digit mobile number" required />
//               <Field label="Email Id" name="email" placeholder="Enter your email address" type="email" required />
//               <label className="field">
//                 <span>Select Issue Type</span>
//                 <select name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required>
//                   <option value="">Choose issue type</option>
//                   {issues.map((item) => (
//                     <option key={item.title} value={item.title}>{item.title}</option>
//                   ))}
//                 </select>
//               </label>
//               <label className="field sm:col-span-2">
//                 <span>Describe your issue</span>
//                 <textarea name="description" required placeholder="Please describe your issue in detail..." />
//               </label>
//               <label className="upload sm:col-span-2">
//                 <Upload size={22} className="text-brand-500" />
//                 <span>
//                   <b>Upload Documents</b>
//                   <small>Click to upload or drag and drop PDF, JPG or PNG</small>
//                 </span>
//                 <input type="file" name="document" accept=".pdf,.jpg,.jpeg,.png" />
//               </label>
//             </div>
//             {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
//             <button
//               type="submit"
//               disabled={submitting}
//               className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {submitting ? "Submitting..." : "Submit Query"} <ArrowRight size={16} />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }








// import { useState } from "react";
// import { ArrowRight, Check, Upload } from "lucide-react";
// import { issues, queryBenefits } from "../../data/constants";
// import Button from "../ui/Button";
// import Field from "../ui/Field";

// // Paste the Web App URL you copied after deploying the Apps Script
// // (the one ending in /exec, NOT the Deployment ID).
// const GOOGLE_SHEET_WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbxWFQjc0Dg2OSX-EUuIscQD2ii3cVSv9HbPDnBrzd_lUhYONcuwNvY-tlUN2NI9GbWm0A/exec";

// // Reads a File object and resolves to its base64 string (without the data: prefix)
// function fileToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result.split(",")[1]);
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// }

// function QuerySuccess({ queryId }) {
//   return (
//     <section id="query" className="section-shell py-16 lg:py-20">
//       <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
//         <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
//           <Check size={30} />
//         </div>
//         <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
//         <p className="mt-3 text-slate-600">
//           Your query reference ID has been generated. Use it to track your query status.
//         </p>
//         <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
//           <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
//           <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
//         </div>
//         <div className="mt-6 flex justify-center gap-3">
//           <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
//           <Button variant="outline" href="#home">Return Home</Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function QueryForm({ selectedIssue }) {
//   const [submitted, setSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [issue, setIssue] = useState(selectedIssue || "");
//   const [fileName, setFileName] = useState("");
//   const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     setSubmitting(true);

//     try {
//       const formEl = e.target;
//       const formData = new FormData(formEl);
//       formData.append("queryId", queryId);

//       const file = formEl.document?.files?.[0];
//       formData.delete("document"); // raw File objects can't be read by Apps Script directly

//       if (file) {
//         // 5MB safety cap: base64 + Apps Script payload limits make large files unreliable
//         if (file.size > 5 * 1024 * 1024) {
//           throw new Error("Please upload a file smaller than 5MB.");
//         }
//         const base64 = await fileToBase64(file);
//         formData.append("fileData", base64);
//         formData.append("fileName", file.name);
//         formData.append("fileType", file.type);
//       }

//       await fetch(GOOGLE_SHEET_WEB_APP_URL, {
//         method: "POST",
//         mode: "no-cors", // Apps Script doesn't send CORS headers, so we can't read the response
//         body: formData,
//       });
//       setSubmitted(true);
//     } catch (err) {
//       setError(err.message || "Something went wrong while submitting. Please check your connection and try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   if (submitted) {
//     return <QuerySuccess queryId={queryId} />;
//   }

//   return (
//     <section id="query" className="w-full section-soft">
//       <div className="section-shell py-16 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
//           <div>
//             <h2 className="section-title">Raise your banking query</h2>
//             <p className="section-copy mt-3">
//               Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
//             </p>
//             <div className="mt-8 space-y-4">
//               {queryBenefits.map((benefit) => (
//                 <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
//                   <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
//                     <Check size={14} />
//                   </span>
//                   {benefit}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="form-card">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
//               <Field label="Mobile Number" name="mobile" placeholder="Enter 10 digit mobile number" required />
//               <Field label="Email Id" name="email" placeholder="Enter your email address" type="email" required />
//               <label className="field">
//                 <span>Select Issue Type</span>
//                 <select name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required>
//                   <option value="">Choose issue type</option>
//                   {issues.map((item) => (
//                     <option key={item.title} value={item.title}>{item.title}</option>
//                   ))}
//                 </select>
//               </label>
//               <label className="field sm:col-span-2">
//                 <span>Describe your issue</span>
//                 <textarea name="description" required placeholder="Please describe your issue in detail..." />
//               </label>
//               <label className="upload sm:col-span-2">
//                 <Upload size={22} className="text-brand-500" />
//                 <span>
//                   <b>Upload Documents</b>
//                   <small>{fileName || "Click to upload or drag and drop PDF, JPG or PNG"}</small>
//                 </span>
//                 <input
//                   type="file"
//                   name="document"
//                   accept=".pdf,.jpg,.jpeg,.png"
//                   onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
//                 />
//               </label>
//             </div>
//             {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
//             <button
//               type="submit"
//               disabled={submitting}
//               className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {submitting ? "Submitting..." : "Submit Query"} <ArrowRight size={16} />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }






import { useState } from "react";
import { ArrowRight, Check, Upload } from "lucide-react";
import { issues, queryBenefits } from "../../data/constants";
import Button from "../ui/Button";
import Field from "../ui/Field";

// Paste the Web App URL you copied after deploying the Apps Script
// (the one ending in /exec, NOT the Deployment ID).
const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxWFQjc0Dg2OSX-EUuIscQD2ii3cVSv9HbPDnBrzd_lUhYONcuwNvY-tlUN2NI9GbWm0A/exec";

// Reads a File object and resolves to its base64 string (without the data: prefix)
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function QuerySuccess({ queryId }) {
  return (
    <section id="query" className="section-shell py-16 lg:py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
          <Check size={30} />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
        <p className="mt-3 text-slate-600">
          Your query reference ID has been generated. Use it to track your query status.
        </p>
        <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
          <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="#track">Track My Query <ArrowRight size={15} /></Button>
          <Button variant="outline" href="#home">Return Home</Button>
        </div>
      </div>
    </section>
  );
}

export default function QueryForm({ selectedIssue }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [issue, setIssue] = useState(selectedIssue || "");
  const [fileName, setFileName] = useState("");
  const [queryId] = useState(() => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const formEl = e.target;
      const formData = new FormData(formEl);
      formData.append("queryId", queryId);

      const file = formEl.document?.files?.[0];
      formData.delete("document"); // raw File objects can't be read by Apps Script directly

      if (file) {
        // 5MB safety cap: base64 + Apps Script payload limits make large files unreliable
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("Please upload a file smaller than 5MB.");
        }
        const base64 = await fileToBase64(file);
        formData.append("fileData", base64);
        formData.append("fileName", file.name);
        formData.append("fileType", file.type);
      }

      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script doesn't send CORS headers, so we can't read the response
        body: formData,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong while submitting. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <QuerySuccess queryId={queryId} />;
  }

  return (
    <section id="query" className="w-full section-soft">
      <div className="section-shell py-11 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="section-title">Raise your banking query</h2>
            <p className="section-copy mt-3">
              Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
            </p>
            {/* Green-tick benefits list: hidden on phone, shown from lg (desktop) up */}
            <div className="mt-8 hidden space-y-4 lg:block">
              {queryBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
                    <Check size={14} />
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
              <Field label="Mobile Number" name="mobile" placeholder="Enter 10 digit mobile number" required />
              <Field label="Email Id" name="email" placeholder="Enter your email address" type="email" required />
              <label className="field">
                <span>Select Issue Type</span>
                <select name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required>
                  <option value="">Choose issue type</option>
                  {issues.map((item) => (
                    <option key={item.title} value={item.title}>{item.title}</option>
                  ))}
                </select>
              </label>
              <label className="field sm:col-span-2">
                <span>Describe your issue</span>
                <textarea name="description" required placeholder="Please describe your issue in detail..." />
              </label>
              <label className="upload sm:col-span-2">
                <Upload size={22} className="text-brand-500" />
                <span>
                  <b>Upload Documents</b>
                  <small>{fileName || "Click to upload or drag and drop PDF, JPG or PNG"}</small>
                </span>
                <input
                  type="file"
                  name="document"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
              </label>
            </div>
            {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Query"} <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
