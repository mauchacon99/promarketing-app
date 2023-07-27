import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CheckboxProps } from "./checkbox.interface";
import { checkboxCva } from "../../../cva/checkbox";

export const defaultProps: CheckboxProps = {
    children: <>label</>,
    value: "default",
    labelPlacement: "right",
};

/**
 * Checkbox.
 *
 * @param props - CheckboxProps.
 * @returns JSX.Element.
 */
const Checkbox = (props: CheckboxProps) => {
    const { children, checked, colorScheme, labelPlacement, ...rest } = {
        ...defaultProps,
        ...props,
    };

    return (
        <label className="relative z-10 flex cursor-pointer items-center">
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
                        className="text-neutral-50"
                    />
                </div>
            </div>
            <>{labelPlacement === "right" && <span>{children}</span>}</>
        </label>
    );
};

export default Checkbox;
