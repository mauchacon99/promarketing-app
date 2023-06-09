import React from "react";
import { ButtonProps } from "./button.interface";
import { buttonCva } from "../../../cva/button";

export const defaultProps: ButtonProps = {
    colorScheme: "primary",
    size: "md",
    label: "Text",
    className: "",
};

/**
 * Button.
 *
 * @param props - ButtonProps.
 * @returns JSX.Element.
 */
const Button = (props: ButtonProps) => {
    const {
        label,
        shadow,
        colorScheme,
        size,
        className,
        w = "default",
        variety,
    } = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            {...props}
            className={buttonCva({
                shadow,
                colorScheme,
                size,
                w,
                variety,
                className,
            })}
        >
            {label}
        </button>
    );
};

export default Button;
