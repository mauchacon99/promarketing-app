import React from "react";
import { ButtonBaseProps } from "./button-base.interface";
import { buttonCva } from "../../cva/button-base-cva";

export const defaultProps: ButtonBaseProps = {
    intent: "primary",
    size: "md",
    label: "Text",
};

/**
 * Button.
 *
 * @param props - ButtonProps.
 * @returns JSX.Element.
 */
const ButtonBase = (props: ButtonBaseProps) => {
    const { label, shadow, intent, className, size, variant } = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            className={buttonCva({ shadow, intent, size, className, variant })}
            {...props}
        >
            {label}
        </button>
    );
};

export default ButtonBase;
