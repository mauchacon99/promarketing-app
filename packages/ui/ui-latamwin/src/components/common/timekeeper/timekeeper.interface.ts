import { HtmlHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { timekeeperCva } from "../../../cva/timekeeper";

export interface TimekeeperProps
    extends HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof timekeeperCva> {
    /** Timekeeper time string. */
    hour: string;
}
