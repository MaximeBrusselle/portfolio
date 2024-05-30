import { Skill } from "@/data/skills/skills";
import { getImageUrl } from "@/libs/getImageUrl";
import { For } from "solid-js";

interface SkillSectionProps {
    title: string;
    skills: Skill[];
}

export function SkillSection(props: SkillSectionProps) {
    const { title, skills } = props;
    const sortedSkills = skills.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div class="flex w-full flex-col items-start justify-start gap-6">
            <h2 class="text-2xl uppercase text-white">{title}</h2>
            <div class="grid w-full grid-cols-2 gap-6 md:grid-cols-6">
                <For each={sortedSkills}>
                    {(skill) => {
                        const percentage = skill.score * 10;
                        return (
                            <div class="flex flex-col items-center justify-end gap-2">
                                <img
                                    src={getImageUrl(
                                        "technology",
                                        skill.imgPath,
                                    )}
                                    alt={skill.name}
                                    class="h-16 w-16 object-contain"
                                />
                                <span class="text-center text-xl text-white">
                                    {skill.name}
                                </span>
                                <div class="w-full rounded-lg bg-gray-500">
                                    <div
                                        class="rounded-lg bg-accent py-[1%] px-2 text-right text-lg text-primary"
                                        style={{ width: `${percentage}%` }}
                                    >
                                        {percentage}%
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </For>
            </div>
        </div>
    );
}
