import { useState } from "react";
import vbx from "../assets/vbx.svg";
import valq from "../assets/valq.svg";
import xviz from "../assets/xviz.png";
import rb from "../assets/resume.png";
import ibcs from "../assets/ibcs.png";
import cashnet from "../assets/cashnet.png";
import kronos from "../assets/kronos.png";

const projectdetails = [
  { key: "valq", logo: { valq }, name: "VALQ", detail: "detail" },
  { key: "xviz", logo: { xviz }, name: "XViz", detail: "detail" },
  { key: "vbx", logo: { vbx }, name: "VBX", detail: "detail" },
  { key: "rb", logo: { rb }, name: "ResumeBuilder", detail: "detail" },
  {
    key: "ibcs",
    logo: { ibcs },
    name: "IBCS Standard Charts",
    detail: "detail",
  },
  { key: "cashnet", logo: { cashnet }, name: "Cahnet", detail: "detail" },
  { key: "kronos", logo: { kronos }, name: "Kronos", detail: "detail" },
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
// <div class="rounded-lg border border-cyan-800 duration-500 shadow-md max-w-100">
//   <div class="grid  grid-cols-2">
//     <span class="text-2xl font-bold text-amber-200 pt-9 pl-3 place-self-start">
//       VBX
//     </span>
//     <img class="size-25 place-self-end" src={vbx} />
//   </div>
//   <div class="flex flex-col pl-3">
//     VBX extensions for SAP Lumira Designer enhances return on BI
//     investments by delivering a powerful range of capabilities to
//     executives and decision makers. The product consists of several
//     components that fall into one of the following categories: Charts,
//     Maps, Selectors, and Utilities.
//   </div>
// </div>
// <div class="rounded-lg border border-cyan-800 duration-500 shadow-md max-w-100">
//   <div class="grid  grid-cols-2">
//     <span class="text-2xl font-bold text-amber-200 pt-9 pl-3 place-self-start">
//       VBX
//     </span>
//     <img class="size-25 place-self-end" src={vbx} />
//   </div>
//   <div class="flex flex-col pl-3">
//     VBX extensions for SAP Lumira Designer enhances return on BI
//     investments by delivering a powerful range of capabilities to
//     executives and decision makers. The product consists of several
//     components that fall into one of the following categories: Charts,
//     Maps, Selectors, and Utilities.
//   </div>
// </div>
// <div class="rounded-lg border border-cyan-800 duration-500 shadow-md max-w-110">
//   <div class="grid  grid-cols-2">
//     <span class="text-2xl font-bold text-amber-200 pt-9 pl-3 place-self-start">
//       VBX
//     </span>
//     <img class="size-25 place-self-end" src={vbx} />
//   </div>
//   <div class="flex flex-col pl-3">
//     VBX extensions for SAP Lumira Designer enhances return on BI
//     investments by delivering a powerful range of capabilities to
//     executives and decision makers. The product consists of several
//     components that fall into one of the following categories: Charts,
//     Maps, Selectors, and Utilities.
//   </div>
// </div>
// <div class="rounded-lg border border-cyan-800 duration-500 shadow-md max-w-100">
//   <div class="grid  grid-cols-2">
//     <span class="text-2xl font-bold text-amber-200 pt-9 pl-3 place-self-start">
//       VBX
//     </span>
//     <img class="size-25 place-self-end" src={vbx} />
//   </div>
//   <div class="flex flex-col pl-3">
//     VBX extensions for SAP Lumira Designer enhances return on BI
//     investments by delivering a powerful range of capabilities to
//     executives and decision makers. The product consists of several
//     components that fall into one of the following categories: Charts,
//     Maps, Selectors, and Utilities.
//   </div>
// </div>
export default function Project() {
  return (
    <>
      <div class="justify-center items-center flex flex-col ">
        <div class="text-4xl font-bold text-amber-500 mb-10">Projects</div>
        <div class="flex flex-wrap gap-12 md:grid grid-cols-2 lg:grid-cols-3 grid-rows-auto">
          {projectdetails.map((project) => {
            return (
              <div class="rounded-lg border border-cyan-800 duration-500 shadow-md max-w-100">
                <div class="grid  grid-cols-2">
                  <span class="text-2xl font-bold text-amber-500 pt-9 pl-3 place-self-start">
                    {project.name}
                  </span>
                  <img
                    class="size-25 place-self-end"
                    src={project.logo[project.key]}
                  />
                </div>
                <div class="flex flex-col pl-3">
                  VBX extensions for SAP Lumira Designer enhances return on BI
                  investments by delivering a powerful range of capabilities to
                  executives and decision makers. The product consists of
                  several components that fall into one of the following
                  categories: Charts, Maps, Selectors, and Utilities.
                </div>
              </div>
            );
          })}
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
