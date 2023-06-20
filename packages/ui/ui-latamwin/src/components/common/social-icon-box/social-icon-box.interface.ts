import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { socialIconBoxCva } from "../../../cva/social-icon-box";

export interface SocialIconBoxProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof socialIconBoxCva> {
    /** ClassName. */
    className?: string;
}
