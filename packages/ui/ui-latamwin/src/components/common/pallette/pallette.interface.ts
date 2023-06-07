import { HtmlHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { palletteCva } from "./../../../cva/pallette";

export interface PalletteProps
    extends HtmlHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof palletteCva> {
    /** */
    label?: string;
    /** */
    palletteItems?: [];
}
