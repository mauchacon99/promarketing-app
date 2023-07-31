import React from "react";
import { ButtonProps } from "./button.interface";
import { buttonCva } from "../../../../src/cva/ui/button";
import { cx } from "class-variance-authority";
import { shadowCva } from "@cva/shared/shadow";

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
            className={cx(
                buttonCva({
                    w: width,
                    colorScheme,
                    size,
                    variety,
                    className,
                }),
                shadowCva({ shadow }),
            )}
        >
            {children}
        </button>
    );
};

export default Button;
