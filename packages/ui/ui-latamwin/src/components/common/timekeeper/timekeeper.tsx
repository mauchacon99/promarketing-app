import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserClock } from "@fortawesome/free-solid-svg-icons";
import { TimekeeperProps } from "./timekeeper.interface";
import { timekeeperCva } from "../../../cva/timekeeper";

/**
 * Timekeeper.
 *
 * @param props - TimekeeperProps.
 * @returns JSX.Element.
 */
const Timekeeper = (props: TimekeeperProps) => {
    const { className, children } = {
        ...props,
    };

    return (
        <>
            <span className={timekeeperCva({ className })}>
                <span className="mr-1.5">
                    <FontAwesomeIcon icon={faUserClock} size="1x" />
                </span>
                {children}
            </span>
        </>
    );
};

export default Timekeeper;
