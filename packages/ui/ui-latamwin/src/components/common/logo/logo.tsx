import React from "react";
import { LogoProps } from "./logo.interface";
import { cx } from "class-variance-authority";

export const defaultProps: LogoProps = {
    size: "md",
};

/**
 * Logo.
 *
 * @param props - LogoProps.
 * @returns JSX.Element.
 */
const Logo = (props: LogoProps) => {
    const { size, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        //Default Classes
        "object-contain",
        {
            "w-[122px] h-[30px]": size === "sm",
            "w-[260px] h-[58px]": size === "md",
            "w-[260px] h-[68px]": size === "lg",
        },
    );

    return (
        <>
            <img {...rest} className={classNameDefault} />
        </>
    );
};

export default Logo;
