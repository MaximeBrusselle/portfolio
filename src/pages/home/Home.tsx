import { Button } from "@/components/ui/button";
import { Download } from "lucide-solid";

export function Home() {
    return (
        <div class="h-full">
            <div class="container mx-auto">
                <div class="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div class="text-center xl:text-left">
                        <span class="text-xl">Full-Stack Developer</span>
                        <h1 class="h1 mb-6">
                            Hello I'm <br />
                            <p class="text-accent">Maxime Brusselle</p>
                        </h1>
                        <p class="mb-9 max-w-[500px] text-white/80">
                            Hier komt mijnen quote
                        </p>
                        <div>
                            <Button
                                variant="outline"
                                size="lg"
                                class="flex items-center gap-2 uppercase"
                            >
                                <span>Download CV</span>
                                <Download class="text-xl" />
                            </Button>
                        </div>
                    </div>
                    <div>photo</div>
                </div>
            </div>
        </div>
    );
}
