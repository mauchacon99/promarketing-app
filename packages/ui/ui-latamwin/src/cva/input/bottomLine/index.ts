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
        variant: {
            default: [
                "bg-secondary-focus",
                "peer-hover:bg-primary-focus",
                "peer-focus:bg-primary-focus",
                "peer-pressed:bg-primary-focus",
            ],
            success: "bg-success-content",
            error: "bg-error-content",
        },
    },
});
