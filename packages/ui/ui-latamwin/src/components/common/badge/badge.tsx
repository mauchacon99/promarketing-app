import React from "react";
import { BadgeProps } from "./badge.interface";
import { badgeCva } from "../../../cva/badge";

/**
 * Badge.
 *
 * @param props - BadgeProps.
 * @returns JSX.Element.
 */
const Badge = (props: BadgeProps) => {
    const {
        children,
        content = "",
        colorScheme,
        ...rest
    } = {
        ...props,
    };

    /**
     * Function getVariety.
     *
     * @param varietyContent Content from the red dot.
     * @returns Variety type.
     */
    function getVariety(varietyContent: string | number) {
        const stringVariety = varietyContent.toString();
        const stringVarietyLength = stringVariety.length;

        if (stringVarietyLength === 0) return "single";
        else if (stringVarietyLength === 1) return "digit";
        else return "multidigit";
    }

    const variety = getVariety(content);

    return (
        <div className="relative w-fit">
            <span
                {...rest}
                className={badgeCva({
                    colorScheme,
                    variety,
                })}
            >
                {content}
            </span>
            {children}
        </div>
    );
};

export default Badge;
