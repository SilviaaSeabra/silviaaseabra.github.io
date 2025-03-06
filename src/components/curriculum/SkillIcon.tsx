import { A } from "@solidjs/router";
import { IconTypes } from "solid-icons";

interface SkillIconProps {
  name: string;
  link: string;
  icon: IconTypes;
  glowColor?: string;
}

export const SkillIcon = (props: SkillIconProps) => {
  const glowColor = props.glowColor || "shadow-blue-300"; // Default pink glow

  return (
    <A
      href={props.link}
      target="_blank"
      class="flex flex-col items-center w-16"
    >
      <div class="relative group">
        <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
        <div
          class={`transition-all w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm ${glowColor} hover:shadow-md border border-white/20 hover:scale-110 active:scale-95 relative z-10`}
        >
          {(() => {
            const Icon = props.icon;
            return <Icon size={24} class="text-blue-600" />;
          })()}
        </div>
      </div>
      <span class="text-sm mt-2 text-center text-blue-700 font-medium">
        {props.name}
      </span>
    </A>
  );
};
