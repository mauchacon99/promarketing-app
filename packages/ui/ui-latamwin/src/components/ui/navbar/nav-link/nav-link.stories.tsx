import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { NavLinkProps } from "./nav-link.interface";
import NavLink from "./nav-link";

const storyBookComponent = {
    title: "NAVBAR/NavLink",
    component: NavLink,
} as Meta<NavLinkProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<NavLinkProps> = (props: NavLinkProps) => {
    return (
        <div className="bg-base-300 w-fit p-5">
            <ul className="flex list-none p-0">
                <NavLink {...props} />
            </ul>
        </div>
    );
};

const argTypes: Partial<ArgTypes<NavLinkProps>> = {
    active: { type: "boolean" },
    children: { control: false },
};

export const NavLinkComponent = Template.bind({});
NavLinkComponent.argTypes = argTypes;
NavLinkComponent.args = {
    children: <a href="#">Item</a>,
};

export default storyBookComponent;
