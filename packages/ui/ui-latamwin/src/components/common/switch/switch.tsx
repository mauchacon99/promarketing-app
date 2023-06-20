import React from "react";
import { SwitchProps } from "./switch.interface";
import { switchCva } from "../../../cva/switch";

export const defaultProps: SwitchProps = {
    defaultValue: false,
    isDisabled: false,
    /** Default ColorScheme.*/
    colorScheme: "accent",
};

/**
 * Switch.
 *
 * @param props - SwitchProps.
 * @returns JSX.Element.
 */
const Switch = (props: SwitchProps) => {
    const { defaultValue, isDisabled, colorScheme, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const switchColorScheme = defaultValue ? colorScheme : "light";
    return (
        <label className="relative inline-flex cursor-pointer items-center">
            <input
                type="checkbox"
                className="peer sr-only"
                checked={defaultValue}
                disabled={isDisabled}
                {...rest}
            />

            <div className={switchCva({ switchColorScheme })}></div>
        </label>
    );
};

export default Switch;
