import { cva } from "class-variance-authority";

const classNameDefault = [
    "block",
    "w-[calc(100%-7.5px)]",
    "h-[3.5px]",
    "absolute",
    "bottom-px",
    "left-[3.75px]",
    "rounded-b-xl",
];

export const inputBottomLineCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            default: [
                "bg-secondary-500",
                "peer-hover:bg-primary-500",
                "peer-focus:bg-primary-500",
                "peer-pressed:bg-primary-500",
            ],
            success: "bg-success-900",
            error: "bg-error-900",
        },
    },
});
