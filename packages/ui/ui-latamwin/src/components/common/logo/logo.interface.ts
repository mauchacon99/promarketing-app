import { VariantProps } from "class-variance-authority";
import { ImgHTMLAttributes } from "react";
import { logoCva } from "src/cva/logo";

export interface LogoProps
    extends ImgHTMLAttributes<HTMLImageElement>,
        VariantProps<typeof logoCva> {}
