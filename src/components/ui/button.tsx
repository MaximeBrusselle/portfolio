import { cn } from "@/libs/cn";
import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent-hover hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

type ButtonProps = ButtonPrimitive.ButtonRootProps &
  VariantProps<typeof buttonVariants> & {
    class?: string;
  };

export const Button = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps>
) => {
  const [local, rest] = splitProps(props as ButtonProps, ["class", "variant", "size"]);

  return (
    <ButtonPrimitive.Root
      class={cn(
        buttonVariants({
          size: local.size,
          variant: local.variant
        }),
        local.class
      )}
      {...rest}
    />
  );
};
