import { cva } from "class-variance-authority";
import variantSizes from "./classNameVariantSize";

const classNameDefault = ["object-contain"];

export const logoCva = cva(classNameDefault, {
    variants: {
        size: variantSizes,
    },
});
