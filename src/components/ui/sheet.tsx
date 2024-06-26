import { cn } from "@/libs/cn";
import * as DialogPrimitive from "@kobalte/core/dialog";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps, ParentProps, ValidComponent } from "solid-js";
import { mergeProps, splitProps } from "solid-js";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;

type SheetOverlayProps = DialogPrimitive.DialogOverlayProps & {
    class?: string;
};

export const SheetOverlay = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, SheetOverlayProps>,
) => {
    const [local, rest] = splitProps(props as SheetOverlayProps, ["class"]);

    return (
        <DialogPrimitive.Overlay
            class={cn(
                "bg-background/80 fixed inset-0 z-50 backdrop-blur-sm backdrop-brightness-75 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0",
                local.class,
            )}
            {...rest}
        />
    );
};

export const sheetVariants = cva(
    "fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[expanded]:animate-in data-[closed]:animate-out duration-200",
    {
        variants: {
            side: {
                top: "inset-x-0 top-0 data-[closed]:slide-out-to-top data-[expanded]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 data-[closed]:slide-out-to-bottom data-[expanded]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 data-[closed]:slide-out-to-left data-[expanded]:slide-in-from-left sm:max-w-sm",
                right: "inset-y-0 right-0 h-full w-3/4 data-[closed]:slide-out-to-right data-[expanded]:slide-in-from-right sm:max-w-sm",
            },
        },
        defaultVariants: {
            side: "right",
        },
    },
);

type SheetContentProps = ParentProps<
    DialogPrimitive.DialogContentProps &
        VariantProps<typeof sheetVariants> & {
            class?: string;
        }
>;

export const SheetContent = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, SheetContentProps>,
) => {
    const merge = mergeProps({ side: "right" }, props);
    const [local, rest] = splitProps(merge, ["class", "children", "side"]);

    return (
        <DialogPrimitive.Portal>
            <SheetOverlay />
            <DialogPrimitive.Content
                class={sheetVariants({ side: local.side, class: local.class })}
                {...rest}
            >
                {local.children}
                <DialogPrimitive.CloseButton class="focus:ring-ring absolute right-4 top-4 rounded-sm text-accent opacity-70 ring-offset-background transition-[opacity,box-shadow] hover:opacity-100 focus:outline-none focus:ring-[1.5px] focus:ring-offset-2 disabled:pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="h-8 w-8"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 6L6 18M6 6l12 12"
                        />
                    </svg>
                    <span class="sr-only">Close</span>
                </DialogPrimitive.CloseButton>
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
};

type SheetTitleProps = DialogPrimitive.DialogTitleProps & {
    class?: string;
};

export const SheetTitle = <T extends ValidComponent = "h2">(
    props: PolymorphicProps<T, SheetTitleProps>,
) => {
    const [local, rest] = splitProps(props as SheetTitleProps, ["class"]);

    return (
        <DialogPrimitive.Title
            class={cn("text-foreground text-lg font-semibold", local.class)}
            {...rest}
        />
    );
};

type SheetDescriptionProps = DialogPrimitive.DialogTitleProps & {
    class?: string;
};

export const SheetDescription = <T extends ValidComponent = "p">(
    props: PolymorphicProps<T, SheetDescriptionProps>,
) => {
    const [local, rest] = splitProps(props as SheetDescriptionProps, ["class"]);

    return (
        <DialogPrimitive.Description
            class={cn("text-muted-foreground text-sm", local.class)}
            {...rest}
        />
    );
};

export const SheetHeader = (props: ComponentProps<"div">) => {
    const [local, rest] = splitProps(props, ["class"]);

    return (
        <div
            class={cn(
                "flex flex-col space-y-2 text-center sm:text-left",
                local.class,
            )}
            {...rest}
        />
    );
};

export const SheetFooter = (props: ComponentProps<"div">) => {
    const [local, rest] = splitProps(props, ["class"]);

    return (
        <div
            class={cn(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                local.class,
            )}
            {...rest}
        />
    );
};
