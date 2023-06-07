import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { InputProps } from "./input.interface";
import Input from "./input";

const StoryBookComponent = {
    title: "ElEMENTS/Input",
    component: Input,
} as Meta<InputProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<InputProps> = (props: InputProps) => {
    return <Input {...props} />;
};

const argTypes: Partial<ArgTypes<InputProps>> = {
    placeholder: { type: "string" },
    variant: {
        options: ["default", "success", "error"],
        control: { type: "radio" },
    },
    helperText: { type: "string" },
    disabled: { type: "boolean" },
};

export const Default = Template.bind({});

Default.argTypes = argTypes;
Default.args = {
    variant: "default",
    placeholder: "Placeholder",
};

export const Success = Template.bind({});

Success.argTypes = argTypes;
Success.args = {
    variant: "success",
    placeholder: "Placeholder",
};

export const Error = Template.bind({});

Error.argTypes = argTypes;
Error.args = {
    variant: "error",
    placeholder: "Placeholder",
};

export default StoryBookComponent;
