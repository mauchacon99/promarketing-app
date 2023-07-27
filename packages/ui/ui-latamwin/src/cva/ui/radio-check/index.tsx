import { cva } from "class-variance-authority";

import { classNameDefault } from "./classNameDefault";
import variantColorScheme from "./classNameVariantColorScheme";

export const radioCheckCva = cva(classNameDefault, {
    variants: {
        colorScheme: variantColorScheme,
    },
});
