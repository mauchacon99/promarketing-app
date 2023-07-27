import React from "react";
import { cx } from "class-variance-authority";
import { SignInButtonProps } from "./sign-in-button.interface";

export const defaultProps: SignInButtonProps = {
    label: "Sign In Button",
};

/**
 * SignInButton.
 *
 * @param props - SignInButtonProps.
 * @returns JSX.Element.
 */
const SignInButton = (props: SignInButtonProps) => {
    const { label, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        //Default Properties
        "flex items-center border-2 border-primary-900 text-primary-900 font-bold",
        //Mobile Properties
        "text-xs leading-[14px] px-[18px] py-1.5 rounded-lg",
        //Desktop Properties
        "sm:text-xl sm:leading-[23px] sm:px-8 sm:py-3 sm:rounded-xl",
    );

    return (
        <button {...rest} className={classNameDefault}>
            {label}
        </button>
    );
};

export default SignInButton;
