import { cva } from "class-variance-authority";

import {
    classNameYellow,
    classNameDanger,
    classNameBlue,
    classNameGray,
} from "./compoundVariantsColorScheme";

const classNameDefault = [
    "font-roboto",
    "font-bold",
    "text-xl",
    "leading-[23px]",
    "flex",
    "items-center",
];

export const contentButtonCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            yellow: classNameYellow,
            danger: classNameDanger,
            blue: classNameBlue,
            gray: classNameGray,
        },
    },
});
