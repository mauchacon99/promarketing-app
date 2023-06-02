import { cva } from "class-variance-authority";
import {
  classNamePrimaryContained,
  classNamePrimaryOutlined,
  classNamePrimaryText,
} from "./variantPrimary";
import {
  classNameSecondaryContained,
  classNameSecondaryOutlined,
  classNameSecondaryText,
} from "./variantSecondary";
import { variantShadow } from "./variantShadow";
import { variantSizes } from "./variantSize";

const classNameDefault = ["py-[14px]", "font-roboto", "font-bold"];

export const buttonCva = cva(classNameDefault, {
  variants: {
    intent: {
      primary: [],
      secondary: [],
    },
    size: variantSizes,
    variant: {
      outlined: [],
      contained: [],
      text: [],
    },
    shadow: variantShadow,
  },
  compoundVariants: [
    {
      intent: "primary",
      variant: "contained",
      className: classNamePrimaryContained,
    },
    {
      intent: "primary",
      variant: "outlined",
      className: classNamePrimaryOutlined,
    },
    {
      intent: "primary",
      variant: "text",
      className: classNamePrimaryText,
    },
    {
      intent: "secondary",
      variant: "contained",
      className: classNameSecondaryContained,
    },
    {
      intent: "secondary",
      variant: "outlined",
      className: classNameSecondaryOutlined,
    },
    {
      intent: "secondary",
      variant: "text",
      className: classNameSecondaryText,
    },
  ],
  defaultVariants: {
    size: "sm",
  },
});
