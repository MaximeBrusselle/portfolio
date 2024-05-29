import { A } from "@solidjs/router";
import { Facebook, Github, Instagram, Linkedin } from "lucide-solid";
import { For, Match, Switch } from "solid-js";

interface Social {
    name: string;
    url: string;
}

const socials: Social[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maxime-brusselle/",
    },
    {
        name: "Github",
        url: "https://www.github.com/maximebrusselle/",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/maximebrusselle/",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/maximebrusselle/",
    },
];

export function Socials() {
    return (
        <div class="flex gap-2">
            <For each={socials}>
                {(social) => (
                    <A
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        class="flex h-9 w-9 items-center justify-center rounded-full text-base duration-300 hover:text-accent hover:transition-all"
                    >
                        <Switch>
                            <Match when={social.name === "Facebook"}>
                                <Facebook />
                            </Match>
                            <Match when={social.name === "Github"}>
                                <Github />
                            </Match>
                            <Match when={social.name === "Instagram"}>
                                <Instagram />
                            </Match>
                            <Match when={social.name === "LinkedIn"}>
                                <Linkedin />
                            </Match>
                        </Switch>
                    </A>
                )}
            </For>
        </div>
    );
}
