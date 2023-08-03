import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cx } from "class-variance-authority";
import { switchCva } from "@cva/ui/switch";
import Switch from "./switch";

describe("SwitchComponent", () => {
    it("should render the component", () => {
        const { getByRole } = render(<Switch />);
        expect(getByRole("checkbox")).toBeTruthy();
    });

    describe("Switch State", () => {
        it("should render unchecked by default", () => {
            const { getByRole } = render(<Switch />);
            expect(getByRole("checkbox")).not.toBeChecked();
        });
        it("should render checked if defaultValue is true", () => {
            const { getByRole } = render(<Switch defaultValue={true} />);
            expect(getByRole("checkbox")).toBeChecked();
        });
        it("should toggle when label is clicked", () => {
            const { getByRole } = render(<Switch />);
            fireEvent.click(getByRole("checkbox"));
            expect(getByRole("checkbox")).toBeChecked();
        });
        it("should call a callback when is passed", () => {
            const onChangeMock = jest.fn();
            const { getByRole } = render(<Switch onChange={onChangeMock} />);
            fireEvent.click(getByRole("checkbox"));
            expect(onChangeMock).toHaveBeenCalledTimes(1);
        });
        it("should not allow change when is disabled", () => {
            const { getByRole } = render(<Switch isDisabled={true} />);
            expect(getByRole("checkbox")).toBeDisabled();
        });
    });

    describe("Switch UI", () => {
        it("should render with de light color scheme", () => {
            const { getByRole } = render(<Switch />);
            expect(getByRole("checkbox").nextElementSibling).toHaveClass(
                cx(switchCva({ colorScheme: "light" })),
            );
        });
        it("should render with de accent color scheme", () => {
            const { getByRole } = render(
                <Switch defaultValue={true} colorScheme="accent" />,
            );
            expect(getByRole("checkbox").nextElementSibling).toHaveClass(
                cx(switchCva({ colorScheme: "accent" })),
            );
        });
    });
});
