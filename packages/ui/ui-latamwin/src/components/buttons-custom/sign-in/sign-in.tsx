import React from "react";
import { cx } from "class-variance-authority";
import { SignInProps } from "./sign-in.interface";

export const defaultProps: SignInProps = {
    label: "Sign In Button",
};

/**
 * SignInButton.
 *
 * @param props - SignInProps.
 * @returns JSX.Element.
 */
const SignIn = (props: SignInProps) => {
    const { label, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        //Default Properties
        "flex items-center border-2 border-primary-default text-primary-default font-bold",
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

export default SignIn;
