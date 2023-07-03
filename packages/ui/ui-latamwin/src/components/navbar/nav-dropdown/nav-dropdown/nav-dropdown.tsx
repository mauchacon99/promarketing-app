import React, { createContext } from "react";
import { NavDropdownItem } from "../nav-dropdown-item";
import { NavDropdownList } from "../nav-dropdown-list";
import { NavDropdownToggle } from "../nav-dropdown-toggle";
import { useNavDropdown } from "../../../../hooks/useNavDropdown";
import { NavDropdownContext, NavDropdownProps } from "./nav-dropdown.interface";

export const navDropdownContext = createContext({} as NavDropdownContext);

const { Provider } = navDropdownContext;
/**
 * NavDropdown.
 *
 * @param props - NavDropdownProps.
 * @param props.children - NavDropdownProps.
 * @param props.isOpen - NavDropdownProps.
 * @returns JSX.Element.
 */
const NavDropdown = (props: NavDropdownProps) => {
    const { children, defaultOpen } = props;
    const { isOpen, toggleDropdown } = useNavDropdown({ defaultOpen });
    /**
     * Component Toggle.
     *
     * @returns JSX.element.
     */

    return (
        <Provider value={{ defaultOpen, isOpen, toggleDropdown }}>
            <div className="relative">{children}</div>
        </Provider>
    );
};

NavDropdown.Item = NavDropdownItem;
NavDropdown.ListItem = NavDropdownList;
NavDropdown.Toggle = NavDropdownToggle;

export default NavDropdown;
