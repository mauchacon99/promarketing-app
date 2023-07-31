import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { roundButtonIconCva } from "../../../../../src/cva/ui/round-button-icon";
import { ShadowProps } from "../../../../cva/shared/shadow";

export interface RoundButtonIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof roundButtonIconCva>,
        ShadowProps {}
