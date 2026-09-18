// import laptopImage from "../../assets/laptop-support.png";

// const steps = [
//   ["Describe your problem", "Tell us what happened with your bank account or transaction."],
//   ["Fill and submit the query form", "Provide required details and upload supporting documents."],
//   ["Receive expert guidance", "Our team will review and suggest the next steps."],
//   ["Track your status", "Check updates anytime using your reference ID."],
//   ["Get to resolution", "We stay with you until your issue is resolved."],
// ];

// export default function DetailedProcess() {
//   return (
//     <section className="w-full border-y border-slate-100 bg-white">
//       <div className="grid lg:grid-cols-2">
//         <div className="min-h-[470px]">
//           <img src={laptopImage} alt="Banking support interface" className="h-full w-full object-cover" />
//         </div>
//         <div className="flex items-center px-6 py-14 lg:px-14 xl:px-20">
//           <div>
//             <h2 className="section-title">How the query process works</h2>
//             <p className="section-copy mt-3">From submission to resolution, we keep it simple and transparent.</p>
//             <div className="mt-8 space-y-5">
//               {steps.map(([title, text], i) => (
//                 <div key={title} className="flex gap-4">
//                   <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-extrabold text-white">
//                     {i + 1}
//                   </span>
//                   <div>
//                     <h3 className="font-bold text-brand-900">{title}</h3>
//                     <p className="mt-1 text-sm leading-5 text-slate-600">{text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import laptopImage from "../../assets/laptop-support.png";

const steps = [
  ["Describe your problem", "Tell us what happened with your bank account or transaction."],
  ["Fill and submit the query form", "Provide required details and upload supporting documents."],
  ["Receive expert guidance", "Our team will review and suggest the next steps."],
  ["Track your status", "Check updates anytime using your reference ID."],
  ["Get to resolution", "We stay with you until your issue is resolved."],
];

export default function DetailedProcess() {
  return (
    <section className="w-full border-y border-slate-100 bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Phone/tablet: a natural aspect ratio instead of a fixed 470px height,
            so the image isn't stretched tall and cropped. Desktop (lg) keeps
            the original fixed-height, full-bleed treatment untouched. */}
        <div className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:min-h-[470px]">
          <img src={laptopImage} alt="Banking support interface" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-4 py-11 md:px-6 md:py-14 lg:px-14 xl:px-20">
          <div>
            <h2 className="section-title">How the query process works</h2>
            <p className="section-copy mt-3">From submission to resolution, we keep it simple and transparent.</p>
            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
              {steps.map(([title, text], i) => (
                <div key={title} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-900">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
