import React, { PropsWithChildren, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";
import "./nav-dropdown.style.scss";
import { navDropdownContext } from "../nav-dropdown/nav-dropdown";

/**
 * NavDropdown.
 *
 * @param props - NavDropdownProps.
 * @returns JSX.Element.
 */
const NavDropdownToggle = (props: PropsWithChildren) => {
    const { children } = { ...props };
    const { isOpen, toggleDropdown } = useContext(navDropdownContext);

    /**
     * Component Toggle.
     *
     * @returns JSX.element.
     */

    return (
        <button
            onClick={() => toggleDropdown()}
            className={clsx(
                "nav-dropdown-text-shadow hover:text-primary-default flex items-center text-sm font-bold",
                //Peer properties
                "peer",
                {
                    "text-primary-default": isOpen,
                    "text-light": !isOpen,
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
