import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonCva } from "./../../../cva/button";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonCva> {
    /** This text button. */
    label: string;
    /** Button Size.*/
    w?: "default" | "auto" | "full";
    /** Represent value is loading.*/
    loading?: boolean;
}
