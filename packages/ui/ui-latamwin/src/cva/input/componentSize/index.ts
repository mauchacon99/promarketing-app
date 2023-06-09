import { cva } from "class-variance-authority";

const classNameDefault = ["relative", "overflow-hidden", "rounded-xl"];

export const inputComponentSizeCva = cva(classNameDefault, {
    variants: {
        componentSize: {
            default: "w-[353px]",
            auto: "w-fit",
            full: "w-full",
        },
    },
});
