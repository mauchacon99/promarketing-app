import React, { PropsWithChildren } from "react";
import { Meta, StoryFn } from "@storybook/react";

import NavDropdown from "./nav-dropdown";

interface NavDropdownProps {
    /** */
    defaultOpen: boolean;
}
interface NavDropdownProps {
    /** */
    defaultOpen: boolean;
}

const storyBookComponent = {
    title: "NAVBAR/NavDropdown",
    component: NavDropdown,
} as Meta<NavDropdownProps>;

/**
 * Template.
 *
 * @returns JSX.Element.
 */
const Template: StoryFn<PropsWithChildren> = () => {
    return (
        <div className="h-1/2 w-full p-10">
            <div className="bg-base-300  w-full px-5 py-5">
                <ul className="flex list-none p-0">
                    <NavDropdown defaultOpen>
                        <NavDropdown.Toggle>Menu</NavDropdown.Toggle>
                        <NavDropdown.ListItem>
                            <NavDropdown.Item> Pragmatic</NavDropdown.Item>
                            <NavDropdown.Item> Playtech </NavDropdown.Item>
                        </NavDropdown.ListItem>
                    </NavDropdown>
                </ul>
            </div>
        </div>
    );
};
export const NavDropdownComponent = Template.bind({});
export default storyBookComponent;
