import htmlImg from "@/public/html.png";
import cssImg from "@/public/css.png";
import jsImg from "@/public/js.png";
import reactImg from "@/public/react.png";
import reduxImg from "@/public/redux.png";
import tsImg from "@/public/ts.png";
import nextImg from "@/public/next.png";
import framerMotionImg from "@/public/framer.png";
import sqlImg from "@/public/mysql.png";
import figmaImg from "@/public/figma.png";

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
  {
    name: "CSS",
    image: cssImg,
    width: 80,
    height: 80,
  },
  {
    name: "JS",
    image: jsImg,
    width: 65,
    height: 65,
  },
  {
    name: "React",
    image: reactImg,
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    image: reduxImg,
    width: 65,
    height: 65,
  },
  {
    name: "TS",
    image: tsImg,
    width: 80,
    height: 80,
  },
  {
    name: "NEXT.js",
    image: nextImg,
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    image: framerMotionImg,
    width: 80,
    height: 80,
  },
  {
    name: "My SQL",
    image: sqlImg,
    width: 80,
    height: 80,
  },
  {
    name: "Figma",
    image: figmaImg,
    width: 50,
    height: 50,
  },
];
