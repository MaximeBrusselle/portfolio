import { Button } from "@/components/ui/button";
import { A } from "@solidjs/router";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = () => {
    return (
        <header class="py-8 text-white xl:py-12">
            <div class="container mx-auto flex items-center justify-between">
                <h1 class="text-4xl font-semibold">
                    Maxime<span class="text-accent">.</span>
                </h1>
                <div class="hidden items-center gap-8 xl:flex">
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
