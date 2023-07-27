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
        options: ["error", "primary"],
        control: { type: "radio" },
    },
    variety: {
        options: ["single", "digit", "multidigit"],
        control: { type: "radio" },
    },
};

export const BadgeSingle = Template.bind({});

BadgeSingle.argTypes = argTypes;
BadgeSingle.args = {
    colorScheme: "error",
    children: <FontAwesomeIcon icon={faUser} size="1x" />,
};

export const BadgeDigit = Template.bind({});

BadgeDigit.argTypes = argTypes;
BadgeDigit.args = {
    colorScheme: "error",
    content: 1,
    variety: "digit",
    children: <FontAwesomeIcon icon={faUser} size="1x" className="block" />,
};

export const BadgeMultiDigit = Template.bind({});

BadgeMultiDigit.argTypes = argTypes;
BadgeMultiDigit.args = {
    colorScheme: "error",
    content: 32,
    variety: "multidigit",
    children: <FontAwesomeIcon icon={faUser} size="1x" />,
};

export default storyBookComponent;
