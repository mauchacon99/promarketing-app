import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { radioCheckCva } from "../../../cva/radio-check";

export interface RadioCheckProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof radioCheckCva> {
    /** Cva Props.*/
    /** LabelPlacement of the component.*/
    labelPlacement: "left" | "right";
}
