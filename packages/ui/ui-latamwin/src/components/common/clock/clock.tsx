import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { ClockProps } from "./clock.interface";
import { clockCva } from "../../../cva/clock";

/**
 * Clock.
 *
 * @param props - ClockProps.
 * @returns JSX.Element.
 */
const Clock = (props: ClockProps) => {
    const { className, children } = {
        ...props,
    };

    return (
        <>
            <span className={clockCva({ className })}>
                <span className="mr-1.5">
                    <FontAwesomeIcon icon={faClock} size="1x" />
                </span>
                {children}
            </span>
        </>
    );
};

export default Clock;
