import React from "react";
import { InputProps } from "./input.interface";
import {
    inputCva,
    inputHelperTextCva,
    inputBottomLineCva,
    inputWCva,
} from "../../../cva/input";

export const defaultProps: InputProps = {
    colorScheme: "default",
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
        colorScheme,
        hasBottomLine = false,
        w = "default",
    } = {
        ...defaultProps,
        ...props,
    };

    /**
     * BottomLine.
     *
     * Input red bottom line as in Figma design.
     * Uses colorScheme prop as closure.
     *
     * @returns JSX.Element.
     */
    const BottomLine = () => {
        return hasBottomLine ? (
            <span className={inputBottomLineCva({ colorScheme })}></span>
        ) : (
            <></>
        );
    };

    /**
     * HelperText.
     *
     * Uses className, colorScheme, helperText props as closure.
     *
     * @returns JSX.Element.
     */
    const HelperText = () => {
        return helperText ? (
            <span className={inputHelperTextCva({ colorScheme })}>
                {helperText}
            </span>
        ) : (
            <></>
        );
    };

    return (
        <>
            <div className={inputWCva({ w })}>
                <input
                    className={inputCva({
                        className,
                        colorScheme,
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
