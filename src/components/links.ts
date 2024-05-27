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

export type { Link };
export { links };