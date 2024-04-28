"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";

export default function SkillContent() {
  return (
    <div className="w=full h-auto flex flex-col items-center justify-center">
      <div className="Welcome-box py-[15px] px-[10px] border border-[#7042f8] opacity-[0.9]">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[15px]">Думай лучше с NEXT.js 14</h1>
      </div>
      <div className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
        Создание приложений при помощи современных технологий
      </div>
    </div>
  );
}
