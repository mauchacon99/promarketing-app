import { cva } from "class-variance-authority";

const classNameDefaultProps = [
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "h-[61px]",
    "bg-primary-content",
    "text-primary",
    "shadow-sm",
];

export const borderRadiusCva = cva(classNameDefaultProps, {
    variants: {
        size: {
            "rounded-md": ["rounded-md"],
            "rounded-lg": ["rounded-lg"],
            "rounded-xl": ["rounded-xl"],
            "rounded-2xl": ["rounded-2xl"],
            "rounded-3xl": ["rounded-3xl"],
            "rounded-full": ["rounded-full"],
        },
    },
});
