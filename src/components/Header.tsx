import { Button } from "@/components/ui/button";
import { A } from "@solidjs/router";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = () => {
	return (
		<header class="py-8 xl:py-12 text-white">
			<div class="container mx-auto flex justify-between items-center">
				<A href="/">
					<h1 class="text-4xl font-semibold">
						Maxime<span class="text-accent">.</span>
					</h1>
				</A>
				<div class="hidden xl:flex items-start gap-8">
					<Nav />
					<A href="/contact">
						<Button>Contact</Button>
					</A>
				</div>
				<div class="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};
