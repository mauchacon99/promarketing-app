import React from "react";
import { RoundButtonIconProps } from "./round-button-icon.interface";
import { roundButtonIconCva } from "../cva/round-button-icon";
import "./round-button-icon.style.scss";

/**
 * RoundButtonIcon.
 *
 * @param props - RoundButtonIconProps.
 * @returns JSX.Element.
 */
const RoundButtonIcon = (props: RoundButtonIconProps) => {
    const { variety, children, ...rest } = {
        ...props,
    };

    return (
        <button {...rest} className={roundButtonIconCva({ variety })}>
            {children}
        </button>
    );
};

export default RoundButtonIcon;
