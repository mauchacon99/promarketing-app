import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cx } from "class-variance-authority";
import Checkbox from "./checkbox";
import classNameVariantColorScheme from "@cva/ui/checkbox/classNameVariantColorScheme";

describe("CheckboxComponent", () => {
    it("should render a checkbox with the children text", () => {
        render(
            <Checkbox data-testid="test-cb" labelPlacement="left">
                ui-test
            </Checkbox>,
        );
        expect(screen.getByLabelText("ui-test")).toBeInTheDocument();
    });

    describe("Checkbox component colorScheme", () => {
        it("should have light color scheme", () => {
            render(
                <Checkbox data-testid="test-cb" labelPlacement="left">
                    ui-test
                </Checkbox>,
            );
            expect(screen.getByRole("checkbox").nextElementSibling).toHaveClass(
                cx(classNameVariantColorScheme.light),
            );
        });
        it("should have accent color scheme", () => {
            render(
                <Checkbox
                    data-testid="test-cb"
                    labelPlacement="left"
                    colorScheme="accent"
                    checked={true}
                >
                    ui-test
                </Checkbox>,
            );
            expect(screen.getByRole("checkbox").nextElementSibling).toHaveClass(
                cx(classNameVariantColorScheme.accent),
            );
        });
    });

    describe("Checkbox component label placement", () => {
        it("should render the label first on the left", () => {
            const { container } = render(
                <Checkbox labelPlacement="left">ui-test</Checkbox>,
            );
            const firstChild = container.firstChild;
            expect(firstChild).toHaveTextContent("ui-test");
        });
        it("should render the label first on the right", () => {
            const { container } = render(
                <Checkbox labelPlacement="right">ui-test</Checkbox>,
            );
            const lastChild = container.lastChild;
            expect(lastChild).toHaveTextContent("ui-test");
        });
    });

    describe("Checkbox component state", () => {
        it("should render a checkbox unchecked by default", () => {
            render(
                <Checkbox data-testid="test-cb" labelPlacement="left">
                    ui-test
                </Checkbox>,
            );
            expect(screen.getByRole("checkbox")).not.toBeChecked();
        });
        it("should render a checkbox checked when is true", () => {
            render(
                <Checkbox
                    data-testid="test-cb"
                    labelPlacement="left"
                    checked={true}
                >
                    ui-test
                </Checkbox>,
            );
            expect(screen.getByRole("checkbox")).toBeChecked();
        });
        it("should toggle state when clicked", () => {
            render(
                <Checkbox data-testid="test-cb" labelPlacement="left">
                    ui-test
                </Checkbox>,
            );
            const label = screen.getByLabelText("ui-test");
            fireEvent.click(label);
            expect(screen.getByRole("checkbox")).toBeChecked();
        });
    });
});
