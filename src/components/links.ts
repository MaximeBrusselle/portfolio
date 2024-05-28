interface NavItem {
	name: string;
	path: string;
}

const links: NavItem[] = [
	{ name: "Education", path: "/education" },
	{ name: "Experience", path: "/experience" },
	{ name: "Projects", path: "/projects" },
	{ name: "Skills", path: "/skills" },
	{ name: "Testimonials", path: "/testimonials" },
];

export type { NavItem };
export { links };