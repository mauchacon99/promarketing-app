import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";
import "./nav-dropdown.style.scss";
import { navDropdownContext } from "../nav-dropdown/nav-dropdown";
import { NavDropdownToggleProps } from "./nav-dropdown-toggle.interface";

/**
 * NavDropdownToggle.
 *
 * @param props - NavDropdownToggleProps.
 * @returns JSX.Element.
 */
const NavDropdownToggle = (props: NavDropdownToggleProps) => {
    const { children, ...rest } = { ...props };
    const { isOpen, toggleDropdown } = useContext(navDropdownContext);

    return (
        <button
            {...rest}
            onClick={() => toggleDropdown()}
            className={clsx(
                "nav-dropdown-text-shadow hover:text-primary-900 flex items-center text-sm font-bold",
                //Peer properties
                "peer",
                {
                    "text-primary-900": isOpen,
                    "text-neutral-50": !isOpen,
                },
            )}
        >
            {children}
            <FontAwesomeIcon
                icon={faChevronDown}
                size="1x"
                className="nav-dropdown-box-shadow ml-2"
            />
        </button>
    );
};

export default NavDropdownToggle;
