import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCva } from "./../../../cva/input";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputCva> {
    /** Helper text. */
    helperText?: string;
    /** Input Bottom Line.*/
    hasBottomLine?: boolean;
    /** Input Size.*/
    componentSize?: "default" | "auto" | "full";
    /** Represent value is loading.*/
    loading?: boolean;
}
