import React from "react";
import { ContentButtonProps } from "./content-button.interface";
import { contentButtonCva } from "../../../cva/content-button";
import IconBall from "../../../assets/icons/icon-ball";

export const defaultProps: ContentButtonProps = {
    colorScheme: "accent",
    hasIcon: true,
    iconPlacement: "left",
    buttonIcon: <IconBall width={"20px"} height={"20px"} />,
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
