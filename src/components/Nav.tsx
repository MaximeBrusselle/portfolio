import { For } from "solid-js";
import { A } from "@solidjs/router";
import { links } from "./links";

export const Nav = () => {
    return (
        <nav class="flex gap-8">
            <For each={links}>
                {(link) => (
                    <A
                        href={link.path}
                        class="font-medium capitalize transition-all hover:text-accent"
                        activeClass="text-accent border-b-2 border-accent"
                        inactiveClass=""
                        end
                    >
                        {link.name}
                    </A>
                )}
            </For>
        </nav>
    );
};
