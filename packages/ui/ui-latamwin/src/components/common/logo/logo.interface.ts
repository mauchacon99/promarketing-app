import { ImgHTMLAttributes } from "react";

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Logo size option. */
    size: "lg" | "md" | "sm";
}
