import React from "react";
import { cx } from "class-variance-authority";
import { NavLinkProps } from "./nav-link.interface";
import "./nav-link.style.scss";

export const defaultProps: NavLinkProps = {
    children: <>Item</>,
    active: false,
};

/**
 * NavLink.
 *
 * @param props - NavLinkProps.
 * @returns JSX.Element.
 */
const NavLink = (props: NavLinkProps) => {
    const { children, active, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const classNameDefault = cx(
        "text-neutral-50 flex items-center border-b-2 border-solid border-transparent p-1 text-lg font-bold leading-[21px]",
        "hover:text-primary-900",
        {
            "text-primary-900 border-b-primary-900": active,
            "nav-link-text-shadow": !active,
        },
    );

    return (
        <li {...rest} className={classNameDefault}>
            {children}
        </li>
    );
};

export default NavLink;
