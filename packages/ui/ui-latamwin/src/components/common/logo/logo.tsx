import React from "react";
import { LogoProps } from "./logo.interface";
import { logoCva } from "../../../cva/logo";

/**
 * Logo.
 *
 * @param props - LogoProps.
 * @returns JSX.Element.
 */
const Logo = (props: LogoProps) => {
    const { size, ...rest } = {
        ...props,
    };

    return (
        <>
            <img {...rest} className={logoCva({ size })} />
        </>
    );
};

export default Logo;
