import React from "react";
import { IconButtonProps } from "./icon-button.interface";
import { iconButtonCva } from "../../../cva/icon-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const defaultProps: IconButtonProps = {
    colorScheme: "primary",
    children: <FontAwesomeIcon icon={faSearch} size="lg" />,
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
