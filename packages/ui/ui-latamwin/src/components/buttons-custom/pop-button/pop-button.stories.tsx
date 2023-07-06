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
    view: { type: "boolean" },
    colorScheme: {
        defaultValue: "accent",
        options: ["accent"],
        control: { type: "radio" },
    },
    alertInput: { type: "boolean" },
};

export const PopButtonView = Template.bind({});

PopButtonView.argTypes = argTypes;
PopButtonView.args = {
    view: true,
};

export const PopButtonViewAlertFalse = Template.bind({});

PopButtonViewAlertFalse.argTypes = argTypes;
PopButtonViewAlertFalse.args = {
    view: true,
    alertInput: false,
};

export const PopButtonViewFalse = Template.bind({});

PopButtonViewFalse.argTypes = argTypes;
PopButtonViewFalse.args = {
    view: false,
};

export const PopButtonViewFalseAlertFalse = Template.bind({});

PopButtonViewFalseAlertFalse.argTypes = argTypes;
PopButtonViewFalseAlertFalse.args = {
    view: false,
    alertInput: false,
};

export default storyBookComponent;
