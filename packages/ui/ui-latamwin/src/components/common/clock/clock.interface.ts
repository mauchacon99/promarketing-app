import { type VariantProps } from "class-variance-authority";
import { clockCva } from "./../../../cva/clock";

export interface ClockProps extends VariantProps<typeof clockCva> {
    /** Clock time string. */
    hour: string;
}
