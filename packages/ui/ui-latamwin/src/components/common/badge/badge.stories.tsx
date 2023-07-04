import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { BadgeProps } from "./badge.interface";
import Badge from "./badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const storyBookComponent = {
    title: "ElEMENTS/Badge",
    component: Badge,
} as Meta<BadgeProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<BadgeProps> = (props: BadgeProps) => {
    return <Badge {...props} />;
};

const argTypes: Partial<ArgTypes<BadgeProps>> = {
    content: { type: "string" },
    colorScheme: {
        options: ["error"],
        control: { type: "radio" },
    },
};

export const BadgeComponent = Template.bind({});

BadgeComponent.argTypes = argTypes;
BadgeComponent.args = {
    colorScheme: "error",
    children: (
        <FontAwesomeIcon
            icon={faUser}
            size="1x"
            className="text-primary-focus block"
        />
    ),
};

export default storyBookComponent;
