import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/components/links";
import { Menu } from "lucide-solid";
import { A } from "@solidjs/router";
import { Button } from "@/components/ui/button";

export function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger class="flex items-center justify-center">
				<Menu class="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent>
				<nav class="flex flex-col gap-8 top-8 justify-center items-center">
					<A href="/" class="mt-24">
						<h1 class="text-4xl font-semibold">
							Maxime<span class="text-accent">.</span>
						</h1>
					</A>
					{links.map((link) => (
						<A href={link.path} class="capitalize font-medium hover:text-accent transition-all text-xl" activeClass="text-accent">
							{link.name}
						</A>
					))}
                    <A href="/contact">
                        <Button class="text-xl capitalize font-medium">
                            Contact
                        </Button>
                    </A>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
