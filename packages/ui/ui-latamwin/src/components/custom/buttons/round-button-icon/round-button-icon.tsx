import React from "react";
import { RoundButtonIconProps } from "./round-button-icon.interface";
import "./round-button-icon.style.scss";
import { roundButtonIconCva } from "../../../../../src/cva/ui/round-button-icon";

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
