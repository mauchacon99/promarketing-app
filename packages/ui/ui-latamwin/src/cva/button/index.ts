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
        size: classNameVariantSizes,
        shadow: classNameVariantShadow,
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
        {
            w: "default",
            size: "sm",
            className: "w-[72px]",
        },
        {
            w: "default",
            size: "md",
            className: "w-[124px]",
        },
        {
            w: "default",
            size: "lg",
            className: "w-[124px]",
        },
    ],
});
