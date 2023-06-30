import React from "react";
import { NavLinkProps } from "./nav-link.interface";
import { clsx } from "clsx";
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

    const classNameDefault = clsx(
        "flex",
        "items-center",
        "p-1",
        "border-b-2",
        "border-solid",
        "border-transparent",
        "text-light",
        "text-lg",
        "leading-[21px]",
        "font-serif",
        "font-bold",
        //Active properties
        active
            ? ["text-primary-default", "border-b-primary-default"]
            : "nav-link-text-shadow",
        //Hover properties
        "hover:text-primary-default",
    );

    return (
        <li {...rest} className={classNameDefault}>
            {children}
        </li>
    );
};

export default NavLink;
