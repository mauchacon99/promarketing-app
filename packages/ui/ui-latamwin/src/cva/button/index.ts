import { cva } from "class-variance-authority";
import {
    classNamePrimaryContained,
    classNamePrimaryOutlined,
    classNamePrimaryText,
} from "./compoundVariantsPrimary";
import {
    classNameSecondaryContained,
    classNameSecondaryOutlined,
    classNameSecondaryText,
} from "./compoundVariantsSecondary";
import variantShadow from "./classNameVariantShadow";
import variantSizes from "./classNameVariantSize";

const classNameDefault = ["font-serif", "font-bold"];

export const buttonCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            primary: [],
            secondary: [],
        },
        variety: {
            outlined: [],
            contained: [],
            text: [],
        },
        w: {
            default: [],
            auto: "w-fit",
            full: "w-full",
        },
        shadow: variantShadow,
        size: variantSizes,
    },
    compoundVariants: [
        {
            colorScheme: "primary",
            variety: "contained",
            className: classNamePrimaryContained,
        },
        {
            colorScheme: "primary",
            variety: "outlined",
            className: classNamePrimaryOutlined,
        },
        {
            colorScheme: "primary",
            variety: "text",
            className: classNamePrimaryText,
        },
        {
            colorScheme: "secondary",
            variety: "contained",
            className: classNameSecondaryContained,
        },
        {
            colorScheme: "secondary",
            variety: "outlined",
            className: classNameSecondaryOutlined,
        },
        {
            colorScheme: "secondary",
            variety: "text",
            className: classNameSecondaryText,
        },
    ],
});
