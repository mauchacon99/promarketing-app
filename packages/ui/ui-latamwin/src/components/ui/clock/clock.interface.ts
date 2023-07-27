import { type VariantProps } from "class-variance-authority";
import { clockCva } from "../../../../src/cva/ui/clock";

export interface ClockProps extends VariantProps<typeof clockCva> {
    /** Clock time string. */
    hour: string;
}
