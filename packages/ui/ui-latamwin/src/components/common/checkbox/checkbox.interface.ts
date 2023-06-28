import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { checkboxCva } from "../../../cva/checkbox";

export interface CheckboxProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof checkboxCva> {
    /** Cva Props.*/
    /** LabelPlacement of the component.*/
    labelPlacement: "left" | "right";
}
