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
            accent: ["text-accent-900"],
            error: ["text-error-100"],
            primary: ["text-primary-900"],
            neutral: ["text-neutral-100"],
        },
    },
});
