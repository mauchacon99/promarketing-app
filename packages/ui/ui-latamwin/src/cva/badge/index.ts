import { cva } from "class-variance-authority";
import variantColorScheme from "./classNameVariantColorScheme";
import variantVariety from "./classNameVariantVariety";

const classNameDefault = [
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "text-xs",
    "leading-[22px]",
    "rounded-full",
];

export const badgeCva = cva(classNameDefault, {
    variants: {
        colorScheme: variantColorScheme,
        variety: variantVariety,
    },
});
