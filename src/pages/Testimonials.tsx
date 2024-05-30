import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";

export function Testimonials() {
    return (
        <div class="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div class="container mx-auto mb-12">
                <div class="text-center">
                    <h1 class="mb-5 text-6xl font-bold text-white md:text-7xl">
                        What people <br />
                        are saying<span class="text-accent">.</span>
                    </h1>
                    <h3 class="mb-5 text-xl text-white/60">
                        A selection of testimonials from some of my clients and
                        colleagues.
                    </h3>
                    <div class="mb-10 text-center">
                        <span class="inline-block h-1 w-1 rounded-full bg-accent"></span>
                        <span class="mx-1 inline-block h-1 w-3 rounded-full bg-accent"></span>
                        <span class="inline-block h-1 w-40 rounded-full bg-accent"></span>
                        <span class="mx-1 inline-block h-1 w-3 rounded-full bg-accent"></span>
                        <span class="inline-block h-1 w-1 rounded-full bg-accent"></span>
                    </div>
                </div>
                <TestimonialGrid />
            </div>
        </div>
    );
}
