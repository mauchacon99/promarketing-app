import React from "react";
import { SocialIconBoxProps } from "./socialIconBox.interface";
import { socialIconBoxCva } from "../../../cva/socialIconBox";

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
