import { cva } from "class-variance-authority";

import { classNameDefault } from "./classNameDefault";
import variantColorScheme from "./classNameVariantColorScheme";

export const switchCva = cva(classNameDefault, {
    variants: {
        switchColorScheme: variantColorScheme,
    },
});
