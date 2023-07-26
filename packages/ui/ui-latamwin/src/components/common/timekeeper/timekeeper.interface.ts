import { type VariantProps } from "class-variance-authority";
import { timekeeperCva } from "../../../cva/timekeeper";

export interface TimekeeperProps extends VariantProps<typeof timekeeperCva> {
    /** Timekeeper time string. */
    sessionTime: string;
}
