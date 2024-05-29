import PFP from "@/assets/PFP.png";
import { Show, createSignal } from "solid-js";
import { Skeleton } from "@/components/ui/skeleton";

export function Photo() {
    const [loading, setLoading] = createSignal(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };

    return (
        <div class="avatar relative h-full w-full">
            <div class="aspect-square w-[298px] rounded-full ring ring-accent ring-offset-8 ring-offset-primary xl:w-[498px]">
                <Show when={loading()}>
                    <Skeleton class="w-full h-full shrink-0 rounded-full bg-gray-500/20" />
                </Show>
                <img
                    src={PFP}
                    alt="Picture of myself"
                    onload={handleImageLoad}
                    onerror={handleImageError}
                    class="h-full w-full rounded-full object-cover"
                    classList={{ hidden: loading() }}
                />
            </div>
        </div>
    );
}
