import { cva } from "class-variance-authority";

const classNameDefault = [
    "font-serif",
    "font-bold",
    "text-xl",
    "leading-[23px]",
    "flex",
    "items-center",
];

export const contentButtonCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            accent: ["text-accent-default"],
            error: ["text-error-content"],
            primary: ["text-primary-default"],
            neutral: ["text-neutral-content"],
        },
    },
});
