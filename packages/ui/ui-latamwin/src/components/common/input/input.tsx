import React from "react";
import { InputProps } from "./input.interface";
import {
    inputCva,
    inputHelperTextCva,
    inputBottomLineCva,
} from "../../../cva/input";

export const defaultProps: InputProps = {
    variant: "default",
};

/**
 * Input.
 *
 * @param props - InputProps.
 * @returns JSX.Element.
 */
const Input = (props: InputProps) => {
    const {
        helperText,
        className = "",
        variant,
    } = {
        ...defaultProps,
        ...props,
    };

    /**
     * BottomLine.
     *
     * Input red bottom line as in Figma design.
     * Uses variant prop as closure.
     *
     * @returns JSX.Element.
     */
    const BottomLine = () => {
        return variant !== "default" ? (
            <span className={inputBottomLineCva({ variant })}></span>
        ) : (
            <></>
        );
    };

    /**
     * HelperText.
     *
     * Uses className, variant, helperText props as closure.
     *
     * @returns JSX.Element.
     */
    const HelperText = () => {
        return helperText ? (
            <span className={inputHelperTextCva({ variant })}>
                {helperText}
            </span>
        ) : (
            <></>
        );
    };

    return (
        <>
            <div className="relative w-fit">
                <div className="relative overflow-hidden rounded-xl">
                    <input
                        className={inputCva({ className, variant })}
                        {...props}
                    />
                    <BottomLine />
                </div>
            </div>
            <HelperText />
        </>
    );
};

export default Input;
