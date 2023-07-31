import { HtmlHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { borderRadiusCva } from "../../cva/border-radius";

export interface BorderRadiusProps
    extends HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof borderRadiusCva> {
    /** Button Size. */
    size:
        | "rounded-md"
        | "rounded-lg"
        | "rounded-xl"
        | "rounded-2xl"
        | "rounded-3xl"
        | "rounded-full";
    /** ClassName. */
    className?: string;
}
