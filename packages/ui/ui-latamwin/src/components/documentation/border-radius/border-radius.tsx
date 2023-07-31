import React from "react";
import { BorderRadiusProps } from "./border-radius.interface";
import { borderRadiusCva } from "../../../cva/documentation/border-radius";

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
