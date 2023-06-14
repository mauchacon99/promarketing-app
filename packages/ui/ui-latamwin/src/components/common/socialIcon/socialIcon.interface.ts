import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { socialIconCva } from "../../../cva/socialIcon";

export interface SocialIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof socialIconCva> {
    /** ClassName. */
    className?: string;
}
