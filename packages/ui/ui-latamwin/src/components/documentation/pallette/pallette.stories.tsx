import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { PalletteProps } from "./pallette.interface";
import Pallette from "./pallette";

const storyBookComponent = {
    title: "DOCUMENTATION/Pallette Color",
    component: Pallette,
} as Meta<PalletteProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<PalletteProps> = (props: PalletteProps) => {
    return (
        <>
            <div className="flex flex-col">
                <Pallette {...props} />
            </div>
        </>
    );
};

const argTypes: ArgTypes<Partial<PalletteProps>> = {};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    palletteItems: [
        "primary-50",
        "primary-100",
        "primary-200",
        "primary-300",
        "primary-400",
        "primary-500",
        "primary-600",
        "primary-700",
        "primary-800",
        "primary-900",
        "primary-950",
        "primary-gradient",
    ],
    label: "Pallette Primary Colors",
};

export const Secondary = Template.bind({});

Secondary.argTypes = argTypes;
Secondary.args = {
    palletteItems: [
        "secondary-50",
        "secondary-100",
        "secondary-200",
        "secondary-300",
        "secondary-400",
        "secondary-500",
        "secondary-600",
        "secondary-700",
        "secondary-800",
        "secondary-900",
        "secondary-950",
        "secondary-gradient",
    ],
    label: "Pallette Secondary Colors",
};

export const Accent = Template.bind({});

Accent.argTypes = argTypes;
Accent.args = {
    palletteItems: [
        "accent-50",
        "accent-100",
        "accent-200",
        "accent-300",
        "accent-400",
        "accent-500",
        "accent-600",
        "accent-700",
        "accent-800",
        "accent-900",
        "accent-950",
    ],
    label: "Pallette Accent Colors",
};

export const Neutrals = Template.bind({});

Neutrals.argTypes = argTypes;
Neutrals.args = {
    palletteItems: [
        "neutral-50",
        "neutral-100",
        "neutral-200",
        "neutral-300",
        "neutral-400",
        "neutral-500",
        "neutral-600",
        "neutral-700",
        "neutral-800",
        "neutral-900",
        "neutral-950",
    ],
    label: "Pallette Neutrals Colors",
};

export const Success = Template.bind({});

Success.argTypes = argTypes;
Success.args = {
    palletteItems: ["success-100", "success-900"],
    label: "Pallette Feedback Colors",
};
export const Error = Template.bind({});

Error.argTypes = argTypes;
Error.args = {
    palletteItems: ["error-100", "error-900"],
    label: "Pallette Feedback Colors",
};
export const Warning = Template.bind({});

Warning.argTypes = argTypes;
Warning.args = {
    palletteItems: ["warning-100", "warning-900"],
    label: "Pallette Feedback Colors",
};
export const Info = Template.bind({});

Info.argTypes = argTypes;
Info.args = {
    palletteItems: ["info-100", "info-900"],
    label: "Pallette Feedback Colors",
};

export default storyBookComponent;
