import { colorsWarning } from "./colors/colorWarning";
import { cva } from "class-variance-authority";
import {
    colorsAccent,
    colorsError,
    colorsInfo,
    colorsNeutral,
    colorsPrimary,
    colorsSecondary,
    colorsSuccess,
} from "./colors";

const classNameDefaultProps = [
    "block",
    "w-[75px]",
    "h-[53px]",
    "border",
    "border-black",
    "rounded-[10px]",
    "mr-[10px]",
];
export const colors = {
    ...colorsPrimary,
    ...colorsAccent,
    ...colorsSecondary,
    ...colorsNeutral,
    ...colorsError,
    ...colorsSuccess,
    ...colorsInfo,
    ...colorsWarning,
};
export const palletteCva = cva(classNameDefaultProps, {
    variants: {
        variant: colors,
    },
});
