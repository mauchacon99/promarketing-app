import React from "react";
import { cx } from "class-variance-authority";
import { PopButtonProps } from "./pop-button.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const defaultProps: PopButtonProps = {
    isVisible: true,
};

/**
 * PopButton.
 *
 * @param props - PopButtonProps.
 * @returns JSX.Element.
 */
const PopButton = (props: PopButtonProps) => {
    const { isVisible, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        "flex items-center justify-center rounded-tr-[11px] w-[45px] rounded-br h-11 text-neutral-50 bg-accent-900",
    );

    return (
        <button {...rest} className={classNameDefault}>
            <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} size="1x" />
        </button>
    );
};

export default PopButton;
