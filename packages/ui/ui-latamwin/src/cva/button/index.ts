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
import { classNameVariantShadow } from "./classNameVariantShadow";
import { classNameVariantSizes } from "./classNameVariantSize";

const classNameDefault = ["font-serif", "font-bold"];

export const buttonCva = cva(classNameDefault, {
    variants: {
        colorScheme: {
            primary: [],
            secondary: [],
        },
        variant: {
            outlined: [],
            contained: [],
            text: [],
        },
        size: classNameVariantSizes,
        shadow: classNameVariantShadow,
    },
    compoundVariants: [
        {
            colorScheme: "primary",
            variant: "contained",
            className: classNamePrimaryContained,
        },
        {
            colorScheme: "primary",
            variant: "outlined",
            className: classNamePrimaryOutlined,
        },
        {
            colorScheme: "primary",
            variant: "text",
            className: classNamePrimaryText,
        },
        {
            colorScheme: "secondary",
            variant: "contained",
            className: classNameSecondaryContained,
        },
        {
            colorScheme: "secondary",
            variant: "outlined",
            className: classNameSecondaryOutlined,
        },
        {
            colorScheme: "secondary",
            variant: "text",
            className: classNameSecondaryText,
        },
    ],
});
