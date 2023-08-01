import React from "react";
import { cx } from "class-variance-authority";
import { RoundButtonIconProps } from "./round-button-icon.interface";
import "./round-button-icon.style.scss";
import { roundButtonIconCva } from "../../../../../src/cva/ui/round-button-icon";
import { shadowCva } from "../../../../cva/shared/shadow";

/**
 * RoundButtonIcon.
 *
 * @param props - RoundButtonIconProps.
 * @returns JSX.Element.
 */
const RoundButtonIcon = (props: RoundButtonIconProps) => {
    const { variety, children, shadow, ...rest } = {
        ...props,
    };

    return (
        <button
            {...rest}
            className={cx(
                roundButtonIconCva({ variety }),
                shadowCva({ shadow }),
            )}
        >
            {children}
        </button>
    );
};

export default RoundButtonIcon;
