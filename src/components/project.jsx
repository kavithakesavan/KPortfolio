import { useState } from "react";
import vbx from "../assets/vbx-logo.svg";
//vbx,xviz,valq,resumebuilder, CloudX ,ibcs charts
//cashnet,kronos
const projectdetails = [
  { logo: "xviz", name: "XViz", detail: "detail" },
  { logo: "vbx", name: "VBX", detail: "detail" },
  { logo: "valq", name: "VALQ", detail: "detail" },
  { logo: " ", name: "ResumeBuilder", detail: "detail" },
  { logo: "ibcs", name: "IBCS Standard Charts", detail: "detail" },
  { logo: "cashnet", name: "Cahnet", detail: "detail" },
  { logo: "kronos", name: "Kronos", detail: "detail" },
];

// export default function Project() {
//   return (
//     <>
//       <div class="text-4xl font-bold text-amber-500">Projects</div>
//       {projectdetails.map((project) => {
//         return (
//           <div class="flex flex-col rounded-lg border-2 border-lime-800 hover:border-lime-600 duration-500 max-w-100 ml-90 mb-5 ">
//             <div class="flex flex-row">
//               <img src={dark} class="size-12"></img>
//               {/* <div class="flex-1 content-center "> */}
//               <div class="py-3 px-2  ">{project.name}</div>
//               {/* </div> */}
//             </div>
//             <div>{project.detail}</div>
//           </div>
//         );
//       })}

//     </>
//   );
// }

export default function Project() {
  return (
    <>
      <div class="justify-center items-center flex flex-col ">
        <div class="text-4xl font-bold text-amber-500">Projects</div>
      </div>
      <div class="flex flex-row">
        <div class="rounded-lg border border-cyan-800 duration-500 shadow-md">
          <div class="flex flex-row  gap-1">
            <div>
              <span class="pt-5 justify-end">Circle CI</span>
              <img class="size-15" src={vbx} />
            </div>
          </div>
          <div class="flex flex-col">
            VBX extensions for SAP Lumira Designer enhances return on BI
            investments by delivering a powerful range of capabilities to
            executives and decision makers. The product consists of several
            components that fall into one of the following categories: Charts,
            Maps, Selectors, and Utilities.
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div class="flex flex-wrap">
  "Strong analytical and problem-solving skills to identify and resolve
  technical issues"Optimizing code for performance and scalability, ensuring
  fast loading times and smooth interactions"
</div>; */
}
