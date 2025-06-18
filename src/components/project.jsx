import { useState } from "react";
import vbx from "../assets/vbx.svg";
import valq from "../assets/valq.svg";
import xviz from "../assets/xviz.png";
import rb from "../assets/resume.png";
import ibcs from "../assets/ibcs.png";
import cashnet from "../assets/cashnet.png";
import kronos from "../assets/kronos.png";

const projectdetails = [
  {
    key: "valq",
    logo: { valq },
    name: "VALQ",
    detail:
      "Dynamic & Collaborative Business Planning in Microsoft Power BI - Empower decision-makers to visualize & analyze future outcomes with ease. Create sales forecasts, financial plans, and business projections instantly & securely with ValQ.",
  },
  {
    key: "xviz",
    logo: { xviz },
    name: "XViz",
    detail:
      "xViz is a leading provider of advanced enterprise-grade visuals for Microsoft Power BI. The powerful, intuitive, and customizable data visualization experience of xViz, maximizes the potential of the data and elevates analysis to new heights. ",
  },
  {
    key: "vbx",
    logo: { vbx },
    name: "VBX",
    detail:
      "VBX extensions for SAP Lumira Designer enhances return on BI investments by delivering a powerful range of capabilities to executives and decision makers.",
  },
  {
    key: "rb",
    logo: { rb },
    name: "Resume Builder",
    detail:
      "A resume builder web application allows users to create professional resumes by filling out pre-designed templates with their personal and career information. It streamlines the resume creation process with features like formatting tools, real-time previews, and export options in formats like PDF or Word.",
  },
  {
    key: "ibcs",
    logo: { ibcs },
    name: "IBCS Standard Charts",
    detail:
      "IBCS is a standard make visual representation of data using specific chart types, formatting, and design principles, making it easier for users globally  to understand and interpret information",
  },
  {
    key: "cashnet",
    logo: { cashnet },
    name: "Cashnet",
    detail:
      "Cash Net Solutions is the premiere end-to-end Merchant Services provider. Our technologically advanced systems provide turnkey solutions for every business wanting to accept credit cards as a form of payment",
  },
  {
    key: "kronos",
    logo: { kronos },
    name: "Kronos",
    detail:
      "Kronos is a workforce management solution (WMS) that is now part of Ultimate Kronos Group (UKG). It helps businesses manage various aspects of their workforce, including time and attendance, scheduling, payroll, and HR functions. ",
  },
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
                <div class="flex flex-col pl-3">{project.detail}</div>
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
