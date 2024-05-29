import { Photo } from "@/components/home/Photo";
import { Socials } from "@/components/home/Socials";
import { Stats } from "@/components/home/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-solid";
import CV from "@/assets/CV.pdf";

export function Home() {
    return (
        <>
            <div class="container mx-auto">
                <div class="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div class="order-2 text-center xl:order-none xl:text-left">
                        <span class="text-xl">Full-Stack Developer</span>
                        <h1 class="h1 mb-6">
                            Hello I'm <br />
                            <p class="text-accent">Maxime Brusselle</p>
                        </h1>
                        <p class="mb-9 max-w-[500px] text-white/80">
                            Junior developer with a passion for learning new
                            things and out of the box solutions.
                        </p>
                        <div class="flex flex-col items-center gap-8 xl:flex-row">
                            <a href="" download={CV} target="_blank">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    class="flex items-center gap-2 uppercase"
                                >
                                    <span>Download CV</span>
                                    <Download class="text-xl" />
                                </Button>
                            </a>
                            <div class="mb-8 flex flex-row xl:mb-0 ">
                                <Socials />
                            </div>
                        </div>
                    </div>
                    <div class="order-1 mb-8 xl:order-none xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </>
    );
}
