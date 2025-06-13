import { useState } from "react";
import dark from "../assets/dark.png";
const workhistory = [
  {
    logo: "logo",
    name: "Lumel(Formerly known as Visual BI)",
    duration: "Mar 2013 - Oct 2023",
  },
  {
    logo: "logo",
    name: "Calsoft Labs(An Alten Group Company",
    duration: "Jan 2011 - Mar 2013",
  },
];
export default function WorkHistory() {
  return (
    <>
      <div class="w-full min-h-screen justify-center items-center ">
        <div class="flex flex-col justify-center items-center py-5 md:py-5 px-4 md:px-10 md:py-10 gap-4">
          <div class="text-4xl font-bold text-amber-500">Work History</div>
        </div>
        {workhistory.map((workitem) => {
          return (
            <div class="flex flex-row rounded-lg border-2 border-lime-800 hover:border-lime-600 duration-500 max-w-100 ml-90 mt-5  mb-5 ">
              <img src={dark} class="size-12" />
              <div class="flex flex-col">
                <div>workitem.name</div>
                <div>workitem.duration</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
