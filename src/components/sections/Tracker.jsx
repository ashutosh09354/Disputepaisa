// import Button from "../ui/Button";

// export default function Tracker() {
//   return (
//     <section id="track" className="section-shell py-16 lg:py-20">
//       <div className="track-box w-full">
//         <div className="relative z-10 w-full max-w-xl xl:max-w-2xl">
//           <h2 className="section-title">Track Your Query</h2>
//           <p className="section-copy mt-2">
//             Enter your query reference number to check the latest status of your request.
//           </p>
//           <div className="mt-6 flex flex-col gap-2 sm:flex-row max-w-lg lg:max-w-xl">
//             <input
//               className="h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
//               placeholder="Enter your reference number"
//             />
//             <Button className="shrink-0 px-6">Track Status</Button>
//           </div>
//         </div>
//         <div className="track-phone relative z-10">
//           <div className="track-phone-screen">
//             <div className="track-phone-header">
//               <span className="text-[10px] font-bold text-slate-400">DisputePaisa</span>
//             </div>
//             <div className="track-phone-body">
//               <div className="text-[11px] font-bold text-slate-500">Query Status</div>
//               <div className="mt-1 text-sm font-extrabold text-brand-900">Query In-Progress</div>
//               <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
//                 <div className="h-full w-3/5 rounded-full bg-brand-500" />
//               </div>
//               <div className="mt-3 flex justify-between text-[10px] text-slate-400">
//                 <span>Submitted</span>
//                 <span>Under Review</span>
//                 <span>Resolved</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Button from "../ui/Button";
import trackStatusPhone from "../../assets/track-status-phone.png";

export default function Tracker() {
  return (
    <section id="track" className="section-shell py-16 lg:py-20 track-section">
      <div className="track-box w-full">
        <div className="relative z-10 w-full max-w-xl xl:max-w-2xl">
          <h2 className="section-title">Track Your Query</h2>
          <p className="section-copy mt-2">
            Enter your query reference number to check the latest status of your request.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row max-w-lg lg:max-w-xl">
            <input
              className="h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              placeholder="Enter your reference number"
            />
            <Button className="shrink-0 px-6">Track Status</Button>
          </div>
        </div>

        <img
          src={trackStatusPhone}
          alt="Query status tracker on phone"
          className="track-phone-image"
        />
      </div>
    </section>
  );
}