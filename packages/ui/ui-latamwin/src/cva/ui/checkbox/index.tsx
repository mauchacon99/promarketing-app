import { cva } from "class-variance-authority";

import { classNameDefault } from "./classNameDefault";
import variantColorScheme from "./classNameVariantColorScheme";

export const checkboxCva = cva(classNameDefault, {
    variants: {
        colorScheme: variantColorScheme,
    },
});
