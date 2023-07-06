import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { PopButtonProps } from "./pop-button.interface";
import PopButton from "./pop-button";

const storyBookComponent = {
    title: "BUTTONS CUSTOM/PopButton",
    component: PopButton,
} as Meta<PopButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<PopButtonProps> = (props: PopButtonProps) => {
    return <PopButton {...props} />;
};

const argTypes: Partial<ArgTypes<PopButtonProps>> = {
    isVisible: { type: "boolean" },
};

export const PopButtonIsVisible = Template.bind({});

PopButtonIsVisible.argTypes = argTypes;
PopButtonIsVisible.args = {
    isVisible: true,
};

export const PopButtonIsNotVisible = Template.bind({});

PopButtonIsNotVisible.argTypes = argTypes;
PopButtonIsNotVisible.args = {
    isVisible: false,
};

export default storyBookComponent;
