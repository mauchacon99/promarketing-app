import { cva } from "class-variance-authority";

const classNameDefault = [
    "bg-base-content",
    "flex",
    "items-center",
    "justify-center",
    "w-[68px]",
    "h-[68px]",
    "rounded-full",
];

export const socialIconCva = cva(classNameDefault);
