import React from "react";
import { LogoProps } from "./logo.interface";
import { logoCva } from "../../../cva/logo";

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

    return (
        <>
            <img {...rest} className={logoCva({ size })} />
        </>
    );
};

export default Logo;
