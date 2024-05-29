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
                <nav class="top-8 flex flex-col items-center justify-center gap-8">
                    <h1 class="text-4xl font-semibold">
                        Maxime<span class="text-accent">.</span>
                    </h1>
                    {links.map((link) => (
                        <A
                            href={link.path}
                            class="text-xl font-medium capitalize transition-all hover:text-accent"
                            activeClass="text-accent"
                            inactiveClass=""
                            end
                        >
                            {link.name}
                        </A>
                    ))}
                    <A href="/contact">
                        <Button class="text-xl font-medium capitalize">
                            Contact
                        </Button>
                    </A>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
