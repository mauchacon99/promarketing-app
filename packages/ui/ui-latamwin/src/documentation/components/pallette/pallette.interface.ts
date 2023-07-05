import { HtmlHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { colors, palletteCva } from "../../cva/pallette";

export interface PalletteProps
    extends HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof palletteCva> {
    /** Label. */
    label?: string;
    /** PalletteItems. */
    palletteItems?: (keyof typeof colors)[];
}
