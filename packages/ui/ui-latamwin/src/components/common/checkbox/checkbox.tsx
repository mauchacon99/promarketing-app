import React from "react";
import { CheckboxProps } from "./checkbox.interface";
import { checkboxCva } from "../../../cva/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const defaultProps: CheckboxProps = {
    children: <>label</>,
    value: "default",
    labelPlacement: "right",
};

/**
 * Radio.
 *
 * @param props - CheckboxProps.
 * @returns JSX.Element.
 */
const Radio = (props: CheckboxProps) => {
    const { children, checked, colorScheme, labelPlacement, ...rest } = {
        ...defaultProps,
        ...props,
    };

    return (
        <label className="font-raleway relative flex cursor-pointer items-center text-sm font-semibold">
            <>{labelPlacement === "left" && <span>{children}</span>}</>
            <div className="px-2">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={checked}
                    {...rest}
                />
                <div
                    className={checkboxCva({
                        colorScheme: checked ? colorScheme : "light",
                    })}
                >
                    <FontAwesomeIcon
                        icon={faCheck}
                        size="1x"
                        className="text-white"
                    />
                </div>
            </div>
            <>{labelPlacement === "right" && <span>{children}</span>}</>
        </label>
    );
};

export default Radio;
