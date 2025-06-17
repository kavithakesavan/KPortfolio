import "./techstack.css";
import dark from "../assets/dark.png";
import vitesvg from "../assets/vite.svg";
const skills = [
  {
    skillimage:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    skillname: "React",
  },
  {
    skillimage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skillname: "Javascript",
  },
  {
    skillimage:
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    skillname: "Tailwind CSS",
  },
  {
    skillimage:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    skillname: "Bootstrap",
  },
  {
    skillimage:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",

    skillname: "Vite",
  },

  {
    skillimage:
      "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    skillname: "Webpack",
  },

  {
    skillimage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    skillname: "Git",
  },
  {
    skillimage: "https://www.svgrepo.com/show/512317/github-142.svg",
    skillname: "Github",
  },
  {
    skillimage: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    skillname: "Html5",
  },
  {
    skillimage: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
    skillname: "CSS3",
  },
  {
    skillimage:
      "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg",
    skillname: "MS PowerBI",
  },
  {
    skillimage: "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
    skillname: "SAP   Ana lytics Cloud",
  },
  {
    skillimage: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
    skillname: "Circle CI",
  },
];
export default function techstack() {
  return (
    <div class="">
      <div class="flex flex-col justify-center items-center py-5 md:py-5 px-4 md:px-10 md:py-10 gap-4">
        <div class="text-4xl font-bold text-amber-500">Tech Stack</div>
        <div class="text-xl text-center">
          Here are some of my skills, on which I have worked{" "}
        </div>
      </div>
      <div class="flex flex-wrap justify-between mt-8 text-sm font-medium text-black md:text-lg ">
        {skills.map((skill) => (
          <div class="items-center px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:flex w-32 bg-gray-50 border-1 md:m-4 hover:scale-125 md:w-48">
            <img className="w-13   p-3" src={skill.skillimage} />

            <h4 class="ml-4 text-md">{skill.skillname}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
