import React from "react";
import { cx } from "class-variance-authority";
import { PopButtonProps } from "./pop-button.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const defaultProps: PopButtonProps = {
    colorScheme: "accent",
    view: true,
    alertInput: true,
};

/**
 * PopButton.
 *
 * @param props - PopButtonProps.
 * @returns JSX.Element.
 */
const PopButton = (props: PopButtonProps) => {
    const { view, colorScheme, alertInput, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        //Default Properties
        "flex items-center justify-center rounded-tr-[11px] w-[45px]",
        //ColorScheme properties
        {
            "text-light bg-accent-default": colorScheme === "accent",
        },
        //AlertInput properties
        {
            "rounded-br h-11": alertInput,
            "rounded-br-[11px] h-[46px]": !alertInput,
        },
    );

    return (
        <button {...rest} className={classNameDefault}>
            <FontAwesomeIcon icon={view ? faEye : faEyeSlash} size="1x" />
        </button>
    );
};

export default PopButton;
