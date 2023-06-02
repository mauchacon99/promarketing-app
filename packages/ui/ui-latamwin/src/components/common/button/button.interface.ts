import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonCva } from "src/cva/button";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonCva> {
    /** This text button. */
    label: string;
    /** Represent value is loading.*/
    loading?: boolean;
}
