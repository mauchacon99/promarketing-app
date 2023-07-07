import { PropsWithChildren } from "react";
import { type VariantProps } from "class-variance-authority";
import { badgeCva } from "./../../../cva/badge";

export interface BadgeProps
    extends PropsWithChildren,
        VariantProps<typeof badgeCva> {
    /** Number of the red dot. */
    content: string | number;
}
