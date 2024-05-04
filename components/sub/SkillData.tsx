"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
  src: StaticImageData;
  width: number;
  height: number;
  index: number;
}

export default function SkillData({ src, width, height, index }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const delayAnimation = 0.4;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * delayAnimation }}
    >
      <Image src={src} width={width} height={height} alt="skill icon" />
    </motion.div>
  );
}
