import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ButtonProps } from "./button.interface";
import Button from "./button";

const storyBookComponent = {
    title: "ElEMENTS/ButtonWithIcon",
    component: Button,
} as Meta<ButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ButtonProps> = (props: ButtonProps) => {
    return <Button {...props} />;
};

const argTypes: Partial<ArgTypes<ButtonProps>> = {
    children: { type: "string" },
    colorScheme: {
        options: ["primary", "accent", "secondary"],
        control: { type: "radio" },
    },
    variety: {
        options: ["contained", "outlined"],
        control: { type: "radio" },
    },
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
    },
    w: {
        options: ["default", "auto", "full"],
        control: { type: "radio" },
    },
    shadow: {
        defaultValue: "none",
        options: ["none", "sm", "md", "lg", "xl"],
        control: { type: "radio" },
    },
    disabled: { type: "boolean" },
};

export const ButtonWithIconChevron = Template.bind({});

ButtonWithIconChevron.argTypes = argTypes;
ButtonWithIconChevron.args = {
    colorScheme: "secondary",
    variety: "contained",
    size: "md",
    w: "auto",
    children: <FontAwesomeIcon icon={faChevronDown} size="1x" />,
};

export default storyBookComponent;
