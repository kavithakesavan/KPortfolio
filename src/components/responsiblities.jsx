import { useState } from "react";
import dark from "../assets/dark.png";
const listofresponsblities = [
  "Designed generic functionalities into reusable and reliable code libraries to be used across different projects within the organization.",
  "Transforming the requirement into Use Case Story with all necessary details and provide estimation by discussing with peers",
  "Excellent communication skills to effectively collaborate with cross-functional teams",
  "Experience in handling complete SDLC using AGILE Methodology",
  " Extensive experience in front-end development technologies, including HTML, CSS, JavaScript, and various frameworks",
  "Strong analytical and problem-solving skills to identify and resolve technical issues.",
  "Optimizing code for performance and scalability, ensuring fast loading times and smooth interactions",
  "Demonstrated leadership skills, including the ability to mentor junior developers and lead front-end development efforts",
  "A willingness to learn and adapt and Keeping up-to-date with the latest front-end technologies and best practices. ",
  "Working with designers to translate wireframes and mockups into functional and visually appealing UI elements    ",
];
export default function Responsiblities() {
  const listItems = listofresponsblities.map((item) => <li>{item}</li>);
  return (
    <div class="w-full min-h-screen justify-center items-center ">
      <div class="flex flex-col justify-center items-center pb-5 md:py-5 px-4 md:px-10 md:py-10 gap-4">
        <div class="text-4xl font-bold text-amber-500">Highlights</div>
        {/* <div class="text-xl text-center">
          Lumel (Formerly as Visual BI) ------------------ 2013-2023
          <br />
          Calsoft Labs(An Alten Company) ------------------ 2011-2013
        </div> */}
        <div class="flex flex-col gap-4 py-10 px-5 md:px-7 rounded-lg border border-lime-800 hover:border-lime-600 duration-500 font-khula leading-relaxed text-lg font-semibold ">
          {listItems}
        </div>
      </div>
    </div>
  );
}
