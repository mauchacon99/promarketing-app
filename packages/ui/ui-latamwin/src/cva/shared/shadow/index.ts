import { cva, type VariantProps } from "class-variance-authority";

export type ShadowProps = VariantProps<typeof shadowCva>;

export const shadowCva = cva(["box", "box-border"], {
    variants: {
        shadow: {
            sm: ["shadow-sm", "shadow-neutral-950/25"],
            md: ["shadow-md", "shadow-neutral-950/25"],
            lg: ["shadow-lg", "shadow-neutral-950/25"],
            xl: ["shadow-xl ", "shadow-neutral-950/25"],
        },
    },
});

export const argTypesShadow = {
    defaultValue: "none",
    options: ["none", "sm", "md", "lg", "xl"],
    control: { type: "radio" },
};
