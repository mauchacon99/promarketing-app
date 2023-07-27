import { cva } from "class-variance-authority";

import { classNameDefault } from "./classNameDefault";
import classNameVariantColorScheme from "./classNameVariantsColorScheme";

export const inputCva = cva(classNameDefault, {
    variants: {
        colorScheme: classNameVariantColorScheme,
    },
});
