import htmlImg from "@/public/html.png";
import { StaticImageData } from "next/image";

interface Skill {
  name: string;
  image: StaticImageData;
  width: number;
  height: number;
}

export const Skill_data: Skill[] = [
  {
    name: "HTML 5",
    image: htmlImg,
    width: 80,
    height: 80,
  },
  // {
  //   name: "CSS",
  //   image: "/css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "JS",
  //   image: "/js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   name: "React",
  //   image: "/react.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Redux",
  //   image: "/redux.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   name: "TS",
  //   image: "/ts.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "NEXT.js",
  //   image: "/next.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Framer Motion",
  //   image: "/framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "My SQL",
  //   image: "/mysql.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Docker",
  //   image: "/docker.webp",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Figma",
  //   image: "/figma.png",
  //   width: 50,
  //   height: 50,
  // },
];
