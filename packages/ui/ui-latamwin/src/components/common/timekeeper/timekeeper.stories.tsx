import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { TimekeeperProps } from "./timekeeper.interface";
import Timekeeper from "./timekeeper";

const storyBookComponent = {
    title: "ElEMENTS/Timekeeper",
    component: Timekeeper,
} as Meta<TimekeeperProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<TimekeeperProps> = (props: TimekeeperProps) => {
    return (
        <>
            <div className="bg-primary-default relative w-fit px-9 py-1.5">
                <Timekeeper {...props} />
            </div>
        </>
    );
};

const argTypes: ArgTypes<Partial<TimekeeperProps>> = {};

export const TimekeeperComponent = Template.bind({});

TimekeeperComponent.argTypes = argTypes;
TimekeeperComponent.args = {
    sessionTime: "17:48",
};

export default storyBookComponent;
