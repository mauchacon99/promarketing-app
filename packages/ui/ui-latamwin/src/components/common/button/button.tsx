import React from "react";
import { ButtonProps } from "./button.interface";
import { buttonCva } from "../../../cva/button";

export const defaultProps: ButtonProps = {
    colorScheme: "primary",
    size: "md",
    label: "Text",
    className: "",
    w: "default",
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
        w: width,
        variety,
        ...rest
    } = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            {...rest}
            className={buttonCva({
                w: width,
                shadow,
                colorScheme,
                size,
                variety,
                className,
            })}
        >
            {label}
        </button>
    );
};

export default Button;
