import { cva } from "class-variance-authority";

const classNameDefault = ["text-xs", "leading-[22px]"];

export const inputHelperTextCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            default: "text-neutral-200",
            success: "text-success-900",
            error: "text-error-900",
        },
    },
});
