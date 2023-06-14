import React from "react";
import { SocialIconProps } from "./socialIcon.interface";
import { socialIconCva } from "../../../cva/socialIcon";

/**
 * SocialIcon.
 *
 * @param props - SocialIconProps.
 * @returns JSX.Element.
 */
const SocialIcon = (props: SocialIconProps) => {
    const { children, className, ...rest } = {
        ...props,
    };

    return (
        <button
            {...rest}
            className={socialIconCva({
                className,
            })}
        >
            {children}
        </button>
    );
};

export default SocialIcon;
