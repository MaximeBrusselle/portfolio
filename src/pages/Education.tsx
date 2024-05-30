import educations from "@/data/education/education";
import { For, Show } from "solid-js";

export function Education() {
    return (
        <div class="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-[60px]">
                    <For each={educations}>
                        {(education) => (
                            <div class="group flex flex-1 flex-col justify-center gap-6">
                                <div class="flex w-full items-center justify-between">
                                    <div class="text-5xl font-extrabold text-white transition-all duration-500 group-hover:text-accent">
                                        {education.id}
                                    </div>
                                    <div class="avatar">
                                        <div class="aspect-square w-[70px] rounded-full bg-white">
                                            <img
                                                class="h-full w-full rounded-full object-cover"
                                                src={
                                                    education.institution
                                                        .imgPath
                                                }
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                                    {education.title}
                                </h2>
                                <div class="flex flex-col">
                                    <p class="text-white/60">
                                        {education.description} @ {education.institution.name}
                                    </p>
                                    <p class="text-white/60">📆 {education.startYear} - {education.endYear}</p>
                                </div>
                                <Show when={education.steps.length > 0}>
                                    <div class="flex flex-col gap-2">
                                        <h3 class="text-white">Specialisations</h3>
                                        <ol
                                            class="list-inside list-decimal"
                                            type="1"
                                        >
                                            <For each={education.steps}>
                                                {(step) => (
                                                    <li class="text-white/60">
                                                        {step}
                                                    </li>
                                                )}
                                            </For>
                                        </ol>
                                    </div>
                                </Show>
                                <div class="w-full border-b border-white/20"></div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}
