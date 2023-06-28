import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { RadioCheckProps } from "./radio-check.interface";
import { radioCheckCva } from "../../../cva/radio-check";

export const defaultProps: RadioCheckProps = {
    children: <>label</>,
    labelPlacement: "right",
};

/**
 * RadioCheck.
 *
 * @param props - RadioCheckProps.
 * @returns JSX.Element.
 */
const RadioCheck = (props: RadioCheckProps) => {
    const { children, checked, colorScheme, labelPlacement, ...rest } = {
        ...defaultProps,
        ...props,
    };

    return (
        <label className="relative z-10 flex cursor-pointer items-center">
            <>{labelPlacement === "left" && <span>{children}</span>}</>
            <div className="px-2">
                <input
                    type="radio"
                    className="peer sr-only"
                    checked={checked}
                    {...rest}
                />
                <div
                    className={radioCheckCva({
                        colorScheme: checked ? colorScheme : "light",
                    })}
                >
                    <FontAwesomeIcon
                        icon={faCheck}
                        size="xs"
                        className="text-light"
                    />
                </div>
            </div>
            <>{labelPlacement === "right" && <span>{children}</span>}</>
        </label>
    );
};

export default RadioCheck;
