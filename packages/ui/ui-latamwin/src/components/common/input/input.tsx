import React from "react";
import { InputProps } from "./input.interface";
import {
    inputCva,
    inputHelperTextCva,
    inputBottomLineCva,
    inputComponentSizeCva,
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
        hasBottomLine = false,
        componentSize = "default",
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
        return hasBottomLine ? (
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
            <div className={inputComponentSizeCva({ componentSize })}>
                <input
                    className={inputCva({
                        className,
                        variant,
                    })}
                    {...props}
                />
                <BottomLine />
            </div>
            <HelperText />
        </>
    );
};

export default Input;
