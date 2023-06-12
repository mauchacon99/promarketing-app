import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { PalletteProps } from "./pallette.interface";
import Pallette from "./pallette";

const storyBookComponent = {
    title: "ElEMENTS/Pallette",
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
            <div className="relative">
                <Pallette {...props} />
            </div>
        </>
    );
};

const argTypes: ArgTypes<Partial<PalletteProps>> = {};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    palletteItems: ["primaryDefault", "primaryFocus", "primaryContent"],
    label: "Pallette Primary Colors",
};

export const Secondary = Template.bind({});

Secondary.argTypes = argTypes;
Secondary.args = {
    palletteItems: ["secondaryDefault", "secondaryFocus", "secondaryContent"],
    label: "Pallette Secondary Colors",
};

export const Accent = Template.bind({});

Accent.argTypes = argTypes;
Accent.args = {
    palletteItems: ["accentDefault", "accentFocus", "accentContent"],
    label: "Pallette Accent Colors",
};

export const Neutrals = Template.bind({});

Neutrals.argTypes = argTypes;
Neutrals.args = {
    palletteItems: ["neutralDefault", "neutralFocus", "neutralContent"],
    label: "Pallette Neutrals Colors",
};

export const Colors = Template.bind({});

Colors.argTypes = argTypes;
Colors.args = {
    palletteItems: [
        "infoDefault",
        "successDefault",
        "warningDefault",
        "errorDefault",
    ],
    label: "Pallette Feedback Colors",
};

export const ColorsContent = Template.bind({});

ColorsContent.argTypes = argTypes;
ColorsContent.args = {
    palletteItems: [
        "infoContent",
        "successContent",
        "warningContent",
        "errorContent",
    ],
    label: "Pallette Feedback Content Colors",
};

export const Bases = Template.bind({});

Bases.argTypes = argTypes;
Bases.args = {
    palletteItems: ["base100", "base200", "base300", "baseContent"],
    label: "Pallette Base Colors",
};

export const Reference = Template.bind({});

Reference.argTypes = argTypes;
Reference.args = {
    palletteItems: ["lightColor", "darkColor"],
    label: "Pallette Reference Colors",
};

export default storyBookComponent;
