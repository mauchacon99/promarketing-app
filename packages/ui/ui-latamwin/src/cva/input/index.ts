import { cva } from "class-variance-authority";

import { variantDefault } from "./variantDefault";
import { variantSuccess } from "./variantSuccess";
import { variantError } from "./variantError";
import { classNameDefault } from "./classesDefault";
import { classNameDisabled } from "./classesDisabled";

const classNameDefaultClasses = [classNameDefault, classNameDisabled];

export const inputCva = cva(classNameDefaultClasses, {
    variants: {
        variant: {
            default: variantDefault,
            success: variantSuccess,
            error: variantError,
        },
    },
});

const helperTextClasses = ["font-poppins", "text-xs", "leading-[22px]"];

export const inputHelperTextCva = cva(helperTextClasses, {
    variants: {
        variant: {
            default: "text-neutral-content",
            success: "text-success-content",
            error: "text-error-content",
        },
    },
});

const bottomLineClasses = [
    "block",
    "w-[calc(100%-7.5px)]",
    "h-[3.5px]",
    "absolute",
    "bottom-px",
    "left-[3.75px]",
    "rounded-b-xl",
];

export const inputBottomLineCva = cva(bottomLineClasses, {
    variants: {
        variant: {
            default: [],
            success: "bg-success-content",
            error: "bg-error-content",
        },
    },
});
