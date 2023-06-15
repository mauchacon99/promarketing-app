import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { iconButtonCva } from "../../../cva/icon-button";

export interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof iconButtonCva> {
    /** ClassName. */
    className?: string;
}
