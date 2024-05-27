import { For } from "solid-js";
import { A } from "@solidjs/router";

interface Link {
	name: string;
	path: string;
}

const links: Link[] = [
	{ name: "Education", path: "/education" },
	{ name: "Experience", path: "/experience" },
	{ name: "Projects", path: "/projects" },
	{ name: "Skills", path: "/skills" },
	{ name: "Testimonials", path: "/testimonials" },
];

export const Nav = () => {
	return (
		<nav class="flex gap-8">
			<For each={links}>
				{(link) => (
					<A href={link.path} activeClass="text-accent border-b-2 border-accent" inactiveClass="">
						{link.name}
					</A>
				)}
			</For>
		</nav>
	);
};
