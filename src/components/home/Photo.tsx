import PFP from "@/assets/PFP.png";

export function Photo() {
    return (
        <div class="relative h-full w-full avatar">
            <div class="aspect-square w-[298px] xl:w-[498px] rounded-full ring ring-accent ring-offset-primary ring-offset-8">
                <img
                    src={PFP}
                    alt="Picture of myself"
                    class="rounded-full w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
