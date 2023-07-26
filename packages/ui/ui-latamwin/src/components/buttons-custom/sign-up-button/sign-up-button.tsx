import React from "react";
import { cx } from "class-variance-authority";
import { SignUpButtonProps } from "./sign-up-button.interface";

export const defaultProps: SignUpButtonProps = {
    label: "Sign up Button",
};

/**
 * SignUpButtonButton.
 *
 * @param props - SignUpButtonProps.
 * @returns JSX.Element.
 */
const SignUpButton = (props: SignUpButtonProps) => {
    const { label, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        //Default Properties
        "flex items-center bg-primary-default text-light font-bold",
        //Mobile Properties
        "text-xs leading-[14px] px-[18px] py-2 rounded-lg",
        //Desktop Properties
        "sm:text-xl sm:leading-[23px] sm:px-8 sm:py-3.5 sm:rounded-xl",
    );

    return (
        <button {...rest} className={classNameDefault}>
            {label}
        </button>
    );
};

export default SignUpButton;
