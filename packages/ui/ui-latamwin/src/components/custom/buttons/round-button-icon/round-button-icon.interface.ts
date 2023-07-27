import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { roundButtonIconCva } from "../../../../../src/cva/ui/round-button-icon";

export interface RoundButtonIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof roundButtonIconCva> {}
