import { cva } from "class-variance-authority";
import classNameVariantShadow from "./classNameVariantShadow";
import classNameVariantColorScheme from "./classNameVariantColorScheme";

const classNameDefault = [
    "flex",
    "items-center",
    "justify-center",
    "w-11",
    "h-11",
    "rounded-full",
];

export const iconButtonCva = cva(classNameDefault, {
    variants: {
        colorScheme: classNameVariantColorScheme,
        shadow: classNameVariantShadow,
    },
});
