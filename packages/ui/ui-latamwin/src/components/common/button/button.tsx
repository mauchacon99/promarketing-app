import React from "react";
import { ButtonProps } from "./button.interface";
import { buttonCva } from "../../../cva/button";

export const defaultProps: ButtonProps = {
    colorScheme: "primary",
    size: "md",
    className: "",
    w: "default",
    children: "",
};

/**
 * Button.
 *
 * @param props - ButtonProps.
 * @returns JSX.Element.
 */
const Button = (props: ButtonProps) => {
    const {
        children,
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
            {children}
        </button>
    );
};

export default Button;
