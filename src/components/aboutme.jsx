import "./aboutme.scss";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import profImg from "../assets/profimage.png";
export default function AboutMe() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Consistent Learner"],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    // <div class="flexContainer">
    //   <div class="firstitem">
    //     <div class="firstitem-1">
    //       Hi , I am <br />
    //       Kavitha Kesavan
    //       <h3 className="typedcursor">
    //         <span ref={el} />{" "}
    //       </h3>
    //     </div>
    //     <div class="firstitem-2">
    //       As an experienced Software Developer, I specialize in building
    //       scalable, user-friendly applications using technologies like MERN,
    //       Next.js, Flutter, Go, AWS & much more. I have hands-on 2 years of
    //       experience developing and deploying full-stack projects and a strong
    //       interest in data structures and algorithms to optimize performance and
    //       security. I continuously enhance my skills and stay eager to explore
    //       new technologies and deliver impactful solutions.
    //     </div>
    //   </div>
    //   <div class="seconditem">
    //     <img className="profimage" src={profImg} />
    //   </div>
    // </div>

    //above code is old one
    // <div>
    //   <div className="aboutme">
    //     Hi, I am
    //     <br />
    //     Kavitha Kesavan
    //     <br />
    //     <h1 className="typedcursor">
    //       <span ref={el} />{" "}
    //     </h1>
    //     <br />
    //     As an experienced Software Developer, I specialize in building scalable,
    //     user-friendly applications using technologies like MERN, Next.js,
    //     Flutter, Go, AWS & much more. I have hands-on 2 years of experience
    //     developing and deploying full-stack projects and a strong interest in
    //     data structures and algorithms to optimize performance and security. I
    //     continuously enhance my skills and stay eager to explore new
    //     technologies and deliver impactful solutions.
    //   </div>
    //   <img className="rounded-full w-sm h-sm" src={profImg} />
    // </div>

    <div
      name="about"
      class=" text-xl p-8 md:px-24 md:py-10 flex flex-col lg:flex-row-reverse gap-6 justify-center items-center"
    >
      <div class="flex-1 flex justify-center items-center">
        <img
          class="rounded-full border border-lime-800 hover:border-lime-500 duration-500"
          src={profImg}
          alt="myImage"
          height="300px"
          width="300px"
        />
      </div>
      <div class="flex flex-1 flex-col flex-wrap gap-8">
        <div class="flex flex-col gap-3">
          <h1 class="text-amber-500 text-2l font-bold"> Hi, I am</h1>
          <h1 class="text-amber-500 text-2l font-bold">Kavitha Kesavan</h1>
          <div class="text-xl font-semibold mt-2">
            <span class="font-bold mr-2">a</span>
            <span
              class="text-xl p-1 px-4 rounded bg-gradient-to-l from-amber-600 to-lime-600"
              data-testid="react-typed"
            >
              <span ref={el} />{" "}
            </span>
          </div>
        </div>
        <div class="font-khula leading-relaxed text-lg font-semibold">
          {" "}
          As an experienced Software Developer, I specialize in building
          scalable, user-friendly applications using technologies like MERN,
          Next.js, Flutter, Go, AWS &amp; much more. I have hands-on 2 years of
          experience developing and deploying full-stack projects and a strong
          interest in data structures and algorithms to optimize performance and
          security. I continuously enhance my skills and stay eager to explore
          new technologies and deliver impactful solutions.
        </div>
      </div>
    </div>
  );
}
