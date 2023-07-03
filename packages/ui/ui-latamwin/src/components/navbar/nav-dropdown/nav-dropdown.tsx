import React, { useState } from "react";
import { NavDropdownProps } from "./nav-dropdown.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";
import "./nav-dropdown.style.scss";

export const defaultProps: NavDropdownProps = {
    children: <>Nav Dropdown</>,
    navDropdownItems: ["Nav Dropdown Item"],
};

/**
 * NavDropdown.
 *
 * @param props - NavDropdownProps.
 * @returns JSX.Element.
 */
const NavDropdown = (props: NavDropdownProps) => {
    const { children, navDropdownItems, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const [listActive, setListActive] = useState(false);

    const classNameDefault = clsx(
        "flex",
        "items-center",
        {
            "text-primary-default": listActive,
            "text-light": !listActive,
        },
        "text-sm",
        "font-bold",
        "nav-dropdown-text-shadow",
        //Hover properties
        "hover:text-primary-default",
        //Peer properties
        "peer",
    );

    const classNameList = clsx(
        {
            "invisible pointer-events-none": !listActive,
        },
        "list-none",
        "min-w-[176px]",
        "absolute",
        "top-full",
        "left-0",
        "mt-[9px]",
        "pt-[14.45px]",
        "pr-[14.41px]",
        "pb-[16.52px]",
        "pl-[13.15px]",
        "bg-base-content",
        "rounded-[14px]",
    );

    const classNameListItem = clsx(
        "flex",
        "items-center",
        "font-medium",
        "text-sm",
        "text-primary-default",
        "p-2.5",
        "pb-[14.26px]",
        "border-b-[.5px]",
        "border-primary-focus",
        "last:border-b-0",
    );
    return (
        <div className="relative">
            <button
                {...rest}
                onClick={() => setListActive(!listActive)}
                className={classNameDefault}
            >
                {children}
                <FontAwesomeIcon
                    icon={faChevronDown}
                    size="1x"
                    className="nav-dropdown-box-shadow ml-2"
                />
            </button>
            <ul className={classNameList}>
                {navDropdownItems?.map((index) => {
                    return (
                        <li key={index} className={classNameListItem}>
                            {index}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavDropdown;
