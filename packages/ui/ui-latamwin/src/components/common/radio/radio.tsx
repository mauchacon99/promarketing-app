import React from "react";
import { RadioProps } from "./radio.interface";
import { radioCva } from "../../../cva/radio";

export const defaultProps: RadioProps = {
    children: <>label</>,
    value: "default",
    labelPlacement: "right",
};

/**
 * Radio.
 *
 * @param props - RadioProps.
 * @returns JSX.Element.
 */
const Radio = (props: RadioProps) => {
    const {
        children,
        value,
        defaultChecked,
        checked,
        disabled,
        colorScheme,
        labelPlacement,
        ...rest
    } = {
        ...defaultProps,
        ...props,
    };

    return (
        <label className="font-raleway relative flex cursor-pointer items-center text-sm font-semibold">
            <>{labelPlacement === "left" && <span>{children}</span>}</>
            <div className="px-2">
                <input
                    type="radio"
                    className="peer sr-only"
                    value={value}
                    defaultChecked={defaultChecked}
                    checked={checked}
                    disabled={disabled}
                    {...rest}
                />
                <div
                    className={radioCva({
                        colorScheme: checked ? colorScheme : "light",
                    })}
                ></div>
            </div>
            <>{labelPlacement === "right" && <span>{children}</span>}</>
        </label>
    );
};

export default Radio;
