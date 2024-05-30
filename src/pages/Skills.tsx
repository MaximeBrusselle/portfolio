import { SkillSection } from "@/components/skills/SkillSection";
import { skills, tools, libraries, languages } from "@/data/skills/skills";
import { For } from "solid-js";

export function Skills() {
    return (
        <div class="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div class="container mx-auto mb-12">
                <div class="flex flex-col items-start justify-start gap-6">
                    <h2 class="text-2xl uppercase text-white">Languages</h2>
                    <div class="grid w-full grid-cols-2 gap-6 md:grid-cols-6">
                        <For each={languages}>
                            {(skill) => (
                                <div class="flex flex-col items-center gap-2">
                                    <p class="text-5xl">{skill.flag}</p>
                                    <span class="text-center text-white text-xl">
                                        {skill.name}
                                    </span>
                                    <span class="text-center text-white/60">{skill.level}</span>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
                <div class="w-full border-b border-white/20 my-6"></div>
                <SkillSection title="Skills" skills={skills} />
                <div class="w-full border-b border-white/20 my-6"></div>
                <SkillSection title="Tools" skills={tools} />
                <div class="w-full border-b border-white/20 my-6"></div>
                <SkillSection title="Libraries" skills={libraries} />
            </div>
        </div>
    );
}
