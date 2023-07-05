import React from "react";
import { BadgeProps } from "./badge.interface";
import { badgeCva } from "../../../cva/badge";

export const defaultProps: BadgeProps = {
    content: "",
    variety: "single",
};
/**
 * Badge.
 *
 * @param props - BadgeProps.
 * @returns JSX.Element.
 */
const Badge = (props: BadgeProps) => {
    const { children, content, variety, colorScheme, ...rest } = {
        ...defaultProps,
        ...props,
    };

    /**
     * Function handle type variety.
     *
     * @returns Variety type.
     */
    const handleTypeVariety =
        content.toString().length > 1 ? "multidigit" : variety;

    return (
        <div className="relative w-fit">
            <span
                {...rest}
                className={badgeCva({
                    colorScheme,
                    variety: handleTypeVariety,
                })}
            >
                {content}
            </span>
            {children}
        </div>
    );
};

export default Badge;
