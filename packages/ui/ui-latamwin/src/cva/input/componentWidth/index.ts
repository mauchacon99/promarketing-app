import { cva } from "class-variance-authority";

const classNameDefault = ["relative", "overflow-hidden", "rounded-xl"];

export const inputComponentWidthCva = cva(classNameDefault, {
    variants: {
        componentWidth: {
            default: "w-[353px]",
            auto: "w-fit",
            full: "w-full",
        },
    },
});
