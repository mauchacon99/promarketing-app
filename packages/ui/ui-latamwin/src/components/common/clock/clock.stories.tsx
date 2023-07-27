import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ClockProps } from "./clock.interface";
import Clock from "./clock";

const storyBookComponent = {
    title: "ElEMENTS/Clock",
    component: Clock,
} as Meta<ClockProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ClockProps> = (props: ClockProps) => {
    return (
        <>
            <div className="bg-primary-900 relative w-fit px-9 py-1.5">
                <Clock {...props} />
            </div>
        </>
    );
};

const argTypes: ArgTypes<Partial<ClockProps>> = {};

export const ClockComponent = Template.bind({});

ClockComponent.argTypes = argTypes;
ClockComponent.args = {
    hour: "17:48",
};

export default storyBookComponent;
