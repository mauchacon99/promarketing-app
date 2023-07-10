import React from "react";
import { SwitchProps } from "./switch.interface";
import { switchCva } from "../../../cva/switch";

export const defaultProps: SwitchProps = {
    defaultValue: false,
    isDisabled: false,
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

    return (
        <label className="relative inline-flex cursor-pointer items-center hover:z-10">
            <input
                type="checkbox"
                className="peer sr-only"
                checked={defaultValue}
                disabled={isDisabled}
                {...rest}
            />

            <div
                className={switchCva({
                    colorScheme: defaultValue ? colorScheme : "light",
                })}
            ></div>
        </label>
    );
};

export default Switch;
