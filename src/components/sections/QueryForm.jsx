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






import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight, Check, CheckCircle2, ClipboardList, Copy, FileText,
  Headphones, LockKeyhole, Mail, MessageSquare, Phone, Search,
  Send, ShieldCheck, Upload, UserRound,
} from "lucide-react";
import { issues, queryBenefits } from "../../data/constants";
import Button from "../ui/Button";

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

function IconField({ label, Icon, className = "", ...props }) {
  return (
    <label className={`field query-icon-field ${className}`}>
      <span>{label} <em>*</em></span>
      <div className="relative">
        <Icon size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
        <input className="!pl-12" {...props} />
      </div>
    </label>
  );
}

function QuerySuccess({ queryId, onRedirect }) {
  const [copied, setCopied] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownId = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    const redirectId = window.setTimeout(() => {
      onRedirect();
      navigate({ pathname: "/", hash: "#query" });
    }, 15000);

    return () => {
      window.clearInterval(countdownId);
      window.clearTimeout(redirectId);
    };
  }, [navigate, onRedirect]);

  const copyQueryId = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(queryId);
      } else {
        const input = document.createElement("textarea");
        input.value = queryId;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="query" className="section-shell py-16 lg:py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-soft">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white">
          <Check size={30} />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold text-brand-900">Your Query Has Been Submitted Successfully</h2>
        <p className="mt-3 text-slate-600">
          <strong>Reference ID</strong> has been generated.
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-500">
          <strong>Please copy or save your Query ID</strong> — you’ll need it to track the status of your query. You’ll be redirected to the <strong>Home Page</strong> in {secondsRemaining} second{secondsRemaining === 1 ? "" : "s"}.
        </p>
        <div className="mx-auto mt-6 max-w-sm rounded-xl bg-white p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Query Reference ID</div>
          <div className="mt-2 text-2xl font-extrabold tracking-wider text-brand-700">{queryId}</div>
          <button
            type="button"
            onClick={copyQueryId}
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-xs font-extrabold text-brand-700 transition hover:bg-brand-100 active:scale-[0.98]"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied" : "Copy ID"}
          </button>
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
  const [description, setDescription] = useState("");
  const createQueryId = () => `DP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`;
  const [queryId] = useState(createQueryId);

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
    return <QuerySuccess queryId={queryId} onRedirect={() => setSubmitted(false)} />;
  }

  return (
    <section id="query" className="query-section w-full overflow-hidden bg-[#f8fcff]">
      <div className="section-shell py-10 md:py-12 lg:py-14 xl:py-16">
        <div className="mx-auto grid max-w-[1520px] items-start gap-10 xl:grid-cols-[1fr_1.04fr] xl:gap-14">
          <div className="query-intro">
            <h2 className="contact-title max-w-[610px] text-brand-900">
              Raise your <span className="block text-brand-500">banking query</span>
            </h2>
            <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-brand-200" />
            <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-slate-600 lg:text-[17px]">
              Share the details of your banking concern. Our team will review your query and contact you regarding the next steps.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {queryBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-brand-900">
                  <CheckCircle2 size={25} className="shrink-0 text-accent-500" /> {benefit}
                </div>
              ))}
              <div className="flex items-center gap-3 text-sm font-semibold text-brand-900">
                <CheckCircle2 size={25} className="shrink-0 text-accent-500" /> Assistance across all major banks
              </div>
            </div>

            <div className="mt-12 hidden sm:block">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-extrabold tracking-[-.04em] text-brand-900">How it works?</h3>
                <span className="h-1 w-14 rounded-full bg-brand-500" />
              </div>
              <div className="mt-5 grid max-w-[590px] grid-cols-2 gap-2 lg:grid-cols-4">
                {[
                  ["01", "Fill the form", FileText, "bg-sky-100 text-brand-500"],
                  ["02", "Get Query ID", Mail, "bg-emerald-100 text-emerald-600"],
                  ["03", "Track Status", Search, "bg-violet-100 text-violet-600"],
                  ["04", "Get Assistance", Headphones, "bg-orange-100 text-orange-500"],
                ].map(([number, title, Icon, colour]) => (
                  <div key={number} className="relative rounded-xl bg-white px-1.5 py-2.5 text-center shadow-[0_8px_18px_rgba(8,41,79,.06)]">
                    <div className={`mx-auto grid h-10 w-10 place-items-center rounded-full ${colour}`}><Icon size={20} /></div>
                    <p className="mt-4 text-xs font-extrabold text-brand-900">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 hidden flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-brand-100 bg-brand-50/80 px-5 py-4 text-sm text-slate-600 sm:flex">
              <ShieldCheck size={46} className="text-brand-500" />
              <strong className="mr-2 text-brand-900">Your information is safe with us</strong>
              <span className="flex items-center gap-2"><LockKeyhole size={16} /> Secure</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} /> Confidential</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="query-form-card rounded-[26px] border border-white bg-white p-5 shadow-[0_18px_55px_rgba(8,41,79,.11)] sm:p-7 lg:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-500"><ClipboardList size={35} /></div>
              <div><h3 className="text-2xl font-extrabold tracking-[-.04em] text-brand-900">Submit Your Query</h3><p className="mt-1 text-sm text-slate-600">Tell us about your banking issue and we'll take it from here.</p></div>
            </div>
            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <IconField label="Full Name" Icon={UserRound} name="fullName" placeholder="Enter your full name" required />
              <IconField label="Mobile Number" Icon={Phone} name="mobile" type="tel" inputMode="numeric" pattern="[0-9]*" maxLength={10} placeholder="Enter 10 digit mobile number" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, ""); }} required />
              <IconField label="Email ID" Icon={Mail} name="email" type="email" placeholder="Enter your email address" required />
              <label className="field query-icon-field"><span>Select Issue Type <em>*</em></span><div className="relative"><MessageSquare size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" /><select className="!pl-12" name="issueType" value={issue} onChange={(e) => setIssue(e.target.value)} required><option value="">Choose issue type</option>{issues.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}</select></div></label>
              <label className="field query-icon-field sm:col-span-2"><span>Describe your issue</span><div className="relative"><MessageSquare size={18} className="pointer-events-none absolute left-4 top-4 text-slate-500" /><textarea className="!min-h-[120px] !pl-12 !pr-14" name="description" value={description} maxLength={500} onChange={(e) => setDescription(e.target.value)} placeholder="Please describe your issue in detail..." /><small className="absolute bottom-3 right-4 text-xs text-slate-400">{description.length}/500</small></div></label>
              <label className="upload query-upload sm:col-span-2"><Upload size={30} className="text-brand-500" /><span><b>Upload Documents <i>(Optional)</i></b><small>{fileName || "Click to upload or drag and drop PDF, JPG or PNG"}</small></span><input type="file" name="document" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} /></label>
            </div>
            {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
            <button type="submit" disabled={submitting} className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-brand-500 py-4 text-base font-extrabold text-white shadow-[0_8px_18px_rgba(20,119,232,.28)] transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting..." : "Submit Query"} {submitting ? <ArrowRight size={20} /> : <Send size={20} />}</button>
            <p className="mt-5 flex justify-center gap-2 text-center text-sm text-slate-500"><LockKeyhole size={18} className="shrink-0" /> Your information is secure and will only be used to assist you.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
