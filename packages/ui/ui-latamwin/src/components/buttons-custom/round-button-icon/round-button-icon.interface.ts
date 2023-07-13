import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { roundButtonIconCva } from "../cva/round-button-icon";

export interface RoundButtonIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof roundButtonIconCva> {}
