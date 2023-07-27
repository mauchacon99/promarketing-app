import { cva } from "class-variance-authority";

import { classNameDefault } from "./classNameDefault";
import variantVariety from "./classNameVariantVariety";

export const roundButtonIconCva = cva(classNameDefault, {
    variants: {
        variety: variantVariety,
    },
});
