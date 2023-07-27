import React from "react";
import { ButtonProps } from "./button.interface";
import { buttonCva } from "../../../../src/cva/ui/button";

export const defaultProps: ButtonProps = {
    colorScheme: "primary",
    size: "md",
    children: "Text",
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
