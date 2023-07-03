import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { NavDropdownProps } from "./nav-dropdown.interface";
import NavDropdown from "./nav-dropdown";

const storyBookComponent = {
    title: "NAVBAR/NavDropdown",
    component: NavDropdown,
} as Meta<NavDropdownProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<NavDropdownProps> = (props: NavDropdownProps) => {
    return (
        <div className="bg-base-300 w-fit py-5 pr-5">
            <ul className="flex list-none p-0">
                <NavDropdown {...props} />
            </ul>
        </div>
    );
};

export const NavDropdownComponent = Template.bind({});
NavDropdownComponent.args = {
    children: <span>Dropdown Item</span>,
    navDropdownItems: [
        "Pragmatic",
        "Playtech",
        "Spinomenal",
        "Más Proveedores....",
    ],
};

export default storyBookComponent;
