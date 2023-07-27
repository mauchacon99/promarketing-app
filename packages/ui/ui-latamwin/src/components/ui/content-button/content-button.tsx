import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { ContentButtonProps } from "./content-button.interface";
import { contentButtonCva } from "../../../../src/cva/ui/content-button";

export const defaultProps: ContentButtonProps = {
    colorScheme: "accent",
    hasIcon: true,
    iconPlacement: "left",
    buttonIcon: <FontAwesomeIcon icon={faFutbol} size="1x" />,
    children: "BUTTON",
    className: "",
};

/**
 * ContentButton.
 *
 * @param props - ContentButtonProps.
 * @returns JSX.Element.
 */
const ContentButton = (props: ContentButtonProps) => {
    const {
        children,
        colorScheme,
        hasIcon,
        iconPlacement,
        buttonIcon,
        className,
        ...rest
    } = {
        ...defaultProps,
        ...props,
    };

    return (
        <button
            {...rest}
            className={contentButtonCva({
                colorScheme,
                className,
            })}
        >
            <>{hasIcon && iconPlacement === "left" && buttonIcon}</>
            <span className="px-1.5">{children}</span>
            <>{hasIcon && iconPlacement === "right" && buttonIcon}</>
        </button>
    );
};

export default ContentButton;
