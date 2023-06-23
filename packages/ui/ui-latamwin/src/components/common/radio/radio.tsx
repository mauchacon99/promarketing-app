import React from "react";
import { RadioProps } from "./radio.interface";
import { radioCva } from "../../../cva/radio";

export const defaultProps: RadioProps = {
    children: <>label</>,
    labelPlacement: "right",
};

/**
 * Radio.
 *
 * @param props - RadioProps.
 * @returns JSX.Element.
 */
const Radio = (props: RadioProps) => {
    const { children, checked, colorScheme, labelPlacement, ...rest } = {
        ...defaultProps,
        ...props,
    };

    return (
        <label className="relative flex cursor-pointer items-center">
            <>{labelPlacement === "left" && <span>{children}</span>}</>
            <div className="px-2">
                <input
                    type="radio"
                    className="peer sr-only"
                    checked={checked}
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
