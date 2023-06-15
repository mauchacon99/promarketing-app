import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { contentButtonCva } from "../../../cva/content-button";

export interface ContentButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof contentButtonCva> {
    /** HasIcon. */
    hasIcon: boolean;
    /** IconPlacement. */
    iconPlacement: "left" | "right";
    /** ButtonIcon. */
    buttonIcon: JSX.Element;
    /** ClassName. */
    className?: string;
}
