import { cva } from "class-variance-authority";

const classNameDefault = ["text-xs", "leading-[22px]"];

export const inputHelperTextCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            default: "text-neutral-content",
            success: "text-success-content",
            error: "text-error-content",
        },
    },
});
