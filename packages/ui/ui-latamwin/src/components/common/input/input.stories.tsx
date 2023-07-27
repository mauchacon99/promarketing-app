import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { PopButton } from "../../buttons-custom/pop-button";

import { InputProps } from "./input.interface";
import Input from "./input";

const storyBookComponent = {
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
    colorScheme: {
        options: ["default", "success", "error"],
        control: { type: "radio" },
    },
    w: {
        options: ["default", "auto", "full"],
        control: { type: "radio" },
    },
    helperText: { type: "string" },
    hasBottomLine: { type: "boolean" },
    disabled: { type: "boolean" },
};

export const Default = Template.bind({});

Default.argTypes = argTypes;
Default.args = {
    colorScheme: "default",
    placeholder: "Placeholder",
};

export const Success = Template.bind({});

Success.argTypes = argTypes;
Success.args = {
    colorScheme: "success",
    placeholder: "Placeholder",
    hasBottomLine: true,
};

export const Error = Template.bind({});

Error.argTypes = argTypes;
Error.args = {
    colorScheme: "error",
    placeholder: "Placeholder",
    hasBottomLine: true,
};
export const WithElementRight = Template.bind({});

WithElementRight.argTypes = argTypes;
WithElementRight.args = {
    colorScheme: "default",
    placeholder: "Placeholder",
    rightElementClasses: "z-10",
    rightElement: <PopButton />,
};
export const WithElementLeft = Template.bind({});

WithElementLeft.argTypes = argTypes;
WithElementLeft.args = {
    colorScheme: "default",
    placeholder: "Placeholder",
    className: "pl-10",
    leftElement: (
        <FontAwesomeIcon icon={faSearch} className="text-neutral-100" />
    ),
    leftElementClasses: "p-4",
};
export const WithElementRightAndLeft = Template.bind({});

WithElementRightAndLeft.argTypes = argTypes;
WithElementRightAndLeft.args = {
    colorScheme: "default",
    placeholder: "Placeholder",
    className: "pl-10",
    leftElement: (
        <FontAwesomeIcon
            icon={faFilterCircleXmark}
            className="text-neutral-100"
        />
    ),
    leftElementClasses: "p-4",
    rightElement: (
        <FontAwesomeIcon icon={faSearch} className="text-neutral-100" />
    ),
    rightElementClasses: "p-4",
};

export default storyBookComponent;
