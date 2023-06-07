import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCva } from "./../../../cva/input";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputCva> {
    /** Helper text. */
    helperText?: string;
    /** Represent value is loading.*/
    loading?: boolean;
}
