import React from "react";
import { cx } from "class-variance-authority";
import { InputProps } from "./input.interface";
import {
    inputCva,
    inputHelperTextCva,
    inputBottomLineCva,
    inputWidthCva,
} from "../../../cva/input";

export const defaultProps: InputProps = {
    colorScheme: "default",
    w: "default",
    className: "",
    hasBottomLine: false,
    rightElementClasses: "",
    leftElementClasses: "",
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
        className,
        colorScheme,
        hasBottomLine,
        w: width,
        disabled,
        rightElementClasses,
        leftElementClasses,
        rightElement,
        leftElement,
        ...rest
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
        return (
            <>
                {hasBottomLine && (
                    <span
                        className={inputBottomLineCva({ colorScheme })}
                    ></span>
                )}
            </>
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
        return (
            <>
                {helperText && (
                    <span
                        className={cx(inputHelperTextCva({ colorScheme }), {
                            "!text-neutral-200": disabled,
                        })}
                    >
                        {helperText}
                    </span>
                )}
            </>
        );
    };

    return (
        <>
            <div className={inputWidthCva({ w: width })}>
                {leftElement && (
                    <div
                        className={cx(
                            "absolute inset-y-0 left-0",
                            leftElementClasses,
                        )}
                    >
                        {leftElement}
                    </div>
                )}

                <input
                    className={inputCva({
                        className,
                        colorScheme,
                    })}
                    disabled={disabled}
                    {...rest}
                />
                {rightElement && (
                    <div
                        className={cx(
                            "absolute inset-y-0 right-0",
                            rightElementClasses,
                        )}
                    >
                        {rightElement}
                    </div>
                )}

                {!disabled && <BottomLine />}
            </div>
            <HelperText />
        </>
    );
};

export default Input;
