import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserClock } from "@fortawesome/free-solid-svg-icons";
import { TimekeeperProps } from "./timekeeper.interface";
import { timekeeperCva } from "../../../../src/cva/ui/timekeeper";

/**
 * Timekeeper.
 *
 * @param props - TimekeeperProps.
 * @returns JSX.Element.
 */
const Timekeeper = (props: TimekeeperProps) => {
    const { sessionTime } = {
        ...props,
    };

    return (
        <>
            <span className={timekeeperCva()}>
                <span className="mr-1.5">
                    <FontAwesomeIcon icon={faUserClock} size="1x" />
                </span>
                {sessionTime}
            </span>
        </>
    );
};

export default Timekeeper;
