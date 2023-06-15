import React from "react";
import { IconButtonProps } from "./icon-button.interface";
import { iconButtonCva } from "../../../cva/icon-button";
import IconSearch from "../../../assets/icons/icon-search";

export const defaultProps: IconButtonProps = {
    colorScheme: "primary",
    children: <IconSearch width={"20px"} height={"20px"} />,
    className: "",
    shadow: "md",
};

/**
 * IconButton.
 *
 * @param props - IconButtonProps.
 * @returns JSX.Element.
 */
const IconButton = (props: IconButtonProps) => {
    const { children, shadow, colorScheme, className, ...rest } = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            {...rest}
            className={iconButtonCva({
                shadow,
                colorScheme,
                className,
            })}
        >
            {children}
        </button>
    );
};

export default IconButton;
