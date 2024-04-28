import { Skill_data } from "@/constants/skills";
import SkillData from "../sub/SkillData";
import SkillContent from "../sub/SkillContent";

export function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10"
    >
      <SkillContent />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((skill, index) => (
          <SkillData
            key={skill.name}
            src={skill.image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            src="/cards-video.webm"
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          />
        </div>
      </div>
    </section>
  );
}
