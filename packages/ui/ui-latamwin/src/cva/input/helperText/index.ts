import { cva } from "class-variance-authority";

const classNameDefault = [
    "font-poppins",
    "text-xs",
    "leading-[22px]",
    "text-neutral-content",
];

export const inputHelperTextCva = cva(classNameDefault, {
    variants: {
        variant: {
            default: [],
            success: "text-success-content",
            error: "text-error-content",
        },
    },
});
