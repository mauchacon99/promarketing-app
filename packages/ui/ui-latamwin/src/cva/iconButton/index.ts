import { cva } from "class-variance-authority";

import {
    classNamePrimary,
    classNameSecondary,
    classNameWhite,
} from "./compoundVariantsColorScheme";
import variantShadow from "./classNameVariantShadow";

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
        colorScheme: {
            primary: classNamePrimary,
            secondary: classNameSecondary,
            white: classNameWhite,
        },
        shadow: variantShadow,
    },
});
