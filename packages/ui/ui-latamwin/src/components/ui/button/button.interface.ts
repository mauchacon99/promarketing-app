import { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonCva } from "../../../../src/cva/ui/button";
import { ShadowProps } from "../../../cva/shared/shadow";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonCva>,
        ShadowProps {
    /** This text button. */
    children: string | ReactNode | ReactNode[];
    /** Button Size. */
    w?: "default" | "auto" | "full";
    /** Represent value is loading.*/
    loading?: boolean;
    /** ClassName. */
    className?: string;
}
