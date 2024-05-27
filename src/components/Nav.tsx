import { For } from "solid-js";
import { A } from "@solidjs/router";
import { links } from "./links";



export const Nav = () => {
	return (
		<nav class="flex gap-8">
			<For each={links}>
				{(link) => (
					<A href={link.path} class="capitalize font-medium hover:text-accent transition-all" activeClass="text-accent border-b-2 border-accent" inactiveClass="">
						{link.name}
					</A>
				)}
			</For>
		</nav>
	);
};
