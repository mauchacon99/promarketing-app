import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCva } from "./../../../../src/cva/ui/input";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputCva> {
    /** Input ColorScheme.*/
    colorScheme?: "default" | "success" | "error";

    /** Helper text. */
    helperText?: string;

    /** Input Bottom Line.*/
    hasBottomLine?: boolean;

    /** Input Width.*/
    w?: "default" | "auto" | "full";
    /** Represent value is loading.*/
    loading?: boolean;
    /** Represent classes add a left element.*/
    leftElementClasses?: string;
    /** Represent classes add a right element.*/
    rightElementClasses?: string;
    /** Represents element aligned to the right of the input. */
    rightElement?: JSX.Element;
    /** Represents element aligned to the left of the input. */
    leftElement?: JSX.Element;
}
