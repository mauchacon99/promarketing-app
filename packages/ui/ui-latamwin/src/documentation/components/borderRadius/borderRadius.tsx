import React from "react";
import { BorderRadiusProps } from "./borderRadius.interface";
import { borderRadiusCva } from "../../cva/borderRadius";

/**
 * BorderRadius.
 *
 * @param props - BorderRadiusProps.
 * @returns JSX.Element.
 */
const BorderRadius = (props: BorderRadiusProps) => {
    const { size, className } = {
        ...props,
    };

    return (
        <>
            <span className={borderRadiusCva({ size, className })}>{size}</span>
        </>
    );
};

export default BorderRadius;
