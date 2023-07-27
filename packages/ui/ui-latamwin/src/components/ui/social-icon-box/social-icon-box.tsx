import React from "react";
import { SocialIconBoxProps } from "./social-icon-box.interface";
import { socialIconBoxCva } from "../../../../src/cva/ui/social-icon-box";

/**
 * SocialIconBox.
 *
 * @param props - SocialIconBoxProps.
 * @returns JSX.Element.
 */
const SocialIconBox = (props: SocialIconBoxProps) => {
    const { children, className, ...rest } = {
        ...props,
    };

    return (
        <button
            {...rest}
            className={socialIconBoxCva({
                className,
            })}
        >
            {children}
        </button>
    );
};

export default SocialIconBox;
