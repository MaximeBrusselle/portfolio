import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import experiences from "@/data/experience/experience";
import { getImageUrl } from "@/libs/getImageUrl";
import { For } from "solid-js";

export function Experience() {
    return (
        <div class="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-[60px]">
                    <For each={experiences}>
                        {(experience) => (
                            <div class="group flex flex-1 flex-col justify-center gap-6">
                                <div class="flex w-full items-center justify-between">
                                    <div class="text-5xl font-extrabold text-white transition-all duration-500 group-hover:text-accent">
                                        {experience.id}
                                    </div>
                                    <div class="avatar">
                                        <div class="aspect-square w-[100px] rounded-full bg-white">
                                            <img
                                                class="h-full w-full rounded-full object-contain"
                                                src={getImageUrl(
                                                    "company",
                                                    experience.company.imgPath,
                                                )}
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-3">
                                    <h2 class="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                                        {experience.title}
                                    </h2>
                                    <div class="flex flex-col">
                                        <p class="text-white/60">
                                            {experience.description} @{" "}
                                            {experience.company.name}
                                        </p>
                                        <p class="text-white/60">
                                            📆 {experience.startYear} -{" "}
                                            {experience.endYear}
                                        </p>
                                    </div>
                                </div>
                                <div class="avatar-group gap-3 flex flex-row flex-wrap">
                                    <For each={experience.technologies}>
                                        {(technology) => (
                                            <div class="avatar">
                                                <Tooltip>
                                                    <TooltipTrigger class="w-12">
                                                        <img src={getImageUrl("technology", technology.imgPath)} alt={technology.name} class="aspect-square rounded-full object-contain w-full h-full"/>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{technology.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </div>
                                        )}
                                    </For>
                                </div>
                                <div class="w-full border-b border-white/20"></div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}
