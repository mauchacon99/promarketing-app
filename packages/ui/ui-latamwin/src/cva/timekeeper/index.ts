import { cva } from "class-variance-authority";

const classNameDefaultProps = [
    "flex",
    "items-center",
    "text-[10px]",
    "leading-3",
    "sm:text-base",
    "sm:leading-[19.2px]",
    "text-light",
];

export const timekeeperCva = cva(classNameDefaultProps);
