import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { ClockProps } from "./clock.interface";
import { clockCva } from "../../../../src/cva/ui/clock";

/**
 * Clock.
 *
 * @param props - ClockProps.
 * @returns JSX.Element.
 */
const Clock = (props: ClockProps) => {
    const { hour } = {
        ...props,
    };

    return (
        <>
            <span className={clockCva()}>
                <span className="mr-1.5">
                    <FontAwesomeIcon icon={faClock} size="1x" />
                </span>
                {hour}
            </span>
        </>
    );
};

export default Clock;
