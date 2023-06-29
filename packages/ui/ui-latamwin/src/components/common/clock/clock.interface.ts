import { HtmlHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { clockCva } from "./../../../cva/clock";

export interface ClockProps
    extends HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof clockCva> {
    /** Clock time string. */
    hour: string;
}
