import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./button.interface";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const storyBookComponent = {
    title: "ElEMENTS/Button",
    component: Button,
} as Meta<ButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ButtonProps> = (props: ButtonProps) => {
    return <Button {...props}> Text </Button>;
};

const argTypes: Partial<ArgTypes<ButtonProps>> = {
    children: { type: "string" },
    colorScheme: {
        options: ["primary", "accent"],
        control: { type: "radio" },
    },
    variety: {
        options: ["contained", "outlined", "text"],
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

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    colorScheme: "primary",
    variety: "contained",
};

export const Accent = Template.bind({});

Accent.argTypes = argTypes;
Accent.args = {
    colorScheme: "accent",
    variety: "contained",
};

export const ChevronLight = Template.bind({});

ChevronLight.argTypes = argTypes;
ChevronLight.args = {
    colorScheme: "accent",
    variety: "contained",
    size: "md",
    w: "auto",
    className: "px-[32px] rounded-[14px]",
    children: (
        <FontAwesomeIcon
            icon={faChevronDown}
            size="1x"
            className="text-light"
        />
    ),
};

export default storyBookComponent;
