"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      id="about-me"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <h3 className="text-white m-auto">В процессе доработки...</h3>
        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-[15px] px-[10px] border border-[#7042f8] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Косов Руслан FE-разработчик
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Давайте создавать{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              лучшие{" "}
            </span>{" "}
            проекты вместе.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Я Frontend Разработчик с опытом разработки сайтов и игр. Оцените мои
          проекты и навыки.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Подробнее
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsDark.svg"
          alt="icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
}
