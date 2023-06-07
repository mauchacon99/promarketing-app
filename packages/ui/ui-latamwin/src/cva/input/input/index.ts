import { cva } from "class-variance-authority";

import { classNameDefault } from "./classNameDefault";
import { classNameVariantDefault } from "./classNameVariantDefault";
import { classNameVariantSuccess } from "./classNameVariantSuccess";
import { classNameVariantError } from "./classNameVariantError";

export const inputCva = cva(classNameDefault, {
    variants: {
        variant: {
            default: classNameVariantDefault,
            success: classNameVariantSuccess,
            error: classNameVariantError,
        },
    },
});
