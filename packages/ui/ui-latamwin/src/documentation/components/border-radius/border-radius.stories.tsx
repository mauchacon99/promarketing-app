import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { BorderRadiusProps } from "./border-radius.interface";
import BorderRadius from "./border-radius";

const storyBookComponent = {
    title: "DOCUMENTATION/Border Radius",
    component: BorderRadius,
} as Meta<BorderRadiusProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<BorderRadiusProps> = (props: BorderRadiusProps) => {
    return (
        <>
            <div className="relative">
                <BorderRadius {...props} />
            </div>
        </>
    );
};

const argTypes: ArgTypes<Partial<BorderRadiusProps>> = {};

export const RoundedMd = Template.bind({});

RoundedMd.argTypes = argTypes;
RoundedMd.args = {
    size: "rounded-md",
};

export const RoundedLg = Template.bind({});

RoundedLg.argTypes = argTypes;
RoundedLg.args = {
    size: "rounded-lg",
};

export const RoundedXl = Template.bind({});

RoundedXl.argTypes = argTypes;
RoundedXl.args = {
    size: "rounded-xl",
};

export const Rounded2Xl = Template.bind({});

Rounded2Xl.argTypes = argTypes;
Rounded2Xl.args = {
    size: "rounded-2xl",
};

export const Rounded3Xl = Template.bind({});

Rounded3Xl.argTypes = argTypes;
Rounded3Xl.args = {
    size: "rounded-3xl",
};

export const RoundedFull = Template.bind({});

RoundedFull.argTypes = argTypes;
RoundedFull.args = {
    size: "rounded-full",
};

export default storyBookComponent;
