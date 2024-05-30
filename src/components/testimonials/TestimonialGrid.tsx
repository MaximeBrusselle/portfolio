import testimonials from "@/data/testimonials/testimonials";
import { getImageUrl } from "@/libs/getImageUrl";
import { For } from "solid-js";

export function TestimonialGrid() {
    return (
        <div class="flex w-full flex-wrap justify-center gap-4 text-center">
            <For each={testimonials}>
                {(testimonial) => (
                    <div class="lg:flex-third box-border flex flex-col items-center justify-start rounded-xl bg-white p-4 text-primary lg:max-w-[30%] shadow-md shadow-white w-full">
                        <img
                            src={getImageUrl(
                                "people",
                                testimonial.person.imgPath,
                            )}
                            alt={testimonial.person.name}
                            class="aspect-square w-24 rounded-full object-cover"
                        />
                        <div class="my-5 text-2xl uppercase font-extrabold">
                            {testimonial.person.name}
                        </div>
                        <p>{testimonial.content}</p>
                    </div>
                )}
            </For>
        </div>
    );
}
