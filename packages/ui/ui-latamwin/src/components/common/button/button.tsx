import React from "react";
import { ButtonProps } from "./button.interface";
import { buttonCva } from "../../../cva/button";

export const defaultProps: ButtonProps = {
    colorScheme: "primary",
    size: "md",
    label: "Text",
};

/**
 * Button.
 *
 * @param props - ButtonProps.
 * @returns JSX.Element.
 */
const Button = (props: ButtonProps) => {
    const { label, shadow, colorScheme, className, size, variant } = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            className={buttonCva({
                shadow,
                colorScheme,
                size,
                className,
                variant,
            })}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
