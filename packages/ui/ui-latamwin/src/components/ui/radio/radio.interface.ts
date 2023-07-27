import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { radioCva } from "../../../../src/cva/ui/radio";

export interface RadioProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof radioCva> {
    /** Cva Props.*/
    /** LabelPlacement of the component.*/
    labelPlacement: "left" | "right";
}
