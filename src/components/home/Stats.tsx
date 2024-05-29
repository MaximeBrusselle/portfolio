import { For, onMount } from "solid-js";
import { stats } from "@/data/home/stats";
import gsap from "gsap";

function numberFormat(value: number) {
    const valueString = value.toString();
    if (valueString.includes(".")) {
        return valueString.substring(0, valueString.indexOf("."));
    }
    return valueString;
}

export function Stats() {
    gsap.registerPlugin();
    return (
        <div class="pb-12 pt-4 xl:pb-0 xl:pt-0">
            <div class="container mx-auto">
                <div class="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
                    <For each={stats}>
                        {(stat) => (
                            <NumberAnimation
                                title={stat.title}
                                value={stat.value}
                            />
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}

function NumberAnimation({ title, value }: { title: string; value: number }) {
    let numberRef: HTMLParagraphElement | null = null;
    onMount(() => {
        gsap.registerPlugin();
        gsap.to(numberRef, {
            innerHTML: value,
            duration: 2,
            ease: "circ.out",
            onUpdate: () => {
                numberRef!.textContent = numberFormat(
                    numberRef!.textContent as unknown as number,
                );
            },
        });
    });
    return (
        <div class="flex flex-1 items-center justify-center gap-4 xl:justify-start">
            <p ref={numberRef!} class="text-4xl font-extrabold xl:text-6xl"></p>
            <div
                classList={{ "max-w-[100px]": title.length < 15 }}
                class="max-w-[150px] leading-snug text-white/80"
            >
                {title}
            </div>
        </div>
    );
}
