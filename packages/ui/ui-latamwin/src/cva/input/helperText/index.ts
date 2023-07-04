import { cva } from "class-variance-authority";

const classNameDefault = ["text-xs", "leading-[22px]"];

export const inputHelperTextCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            default: "text-neutral-100",
            success: "text-success-100",
            error: "text-error-100",
        },
    },
});
