import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cx } from "class-variance-authority";
import { radioCva } from "@cva/ui/radio";
import Radio from "./radio";

describe("RadioComponent", () => {
    it("should render a radio with the children text", () => {
        render(<Radio labelPlacement="left">ui-test</Radio>);
        expect(screen.getByLabelText("ui-test")).toBeInTheDocument();
    });

    describe("Radio component colorScheme", () => {
        it("should have light color scheme", () => {
            render(<Radio labelPlacement="left">ui-test</Radio>);
            expect(screen.getByRole("radio").nextElementSibling).toHaveClass(
                cx(radioCva({ colorScheme: "light" })),
            );
        });
        it("should have accent color scheme", () => {
            render(
                <Radio
                    labelPlacement="left"
                    colorScheme="accent"
                    checked={true}
                    onChange={() => {
                        return;
                    }}
                >
                    ui-test
                </Radio>,
            );
            expect(screen.getByRole("radio").nextElementSibling).toHaveClass(
                cx(radioCva({ colorScheme: "accent" })),
            );
        });
    });

    describe("Radio component label placement", () => {
        it("should render the label first on the left", () => {
            const { container } = render(
                <Radio labelPlacement="left">ui-test</Radio>,
            );
            const firstChild = container.firstChild;
            expect(firstChild).toHaveTextContent("ui-test");
        });
        it("should render the label first on the right", () => {
            const { container } = render(
                <Radio labelPlacement="right">ui-test</Radio>,
            );
            const lastChild = container.lastChild;
            expect(lastChild).toHaveTextContent("ui-test");
        });
    });

    describe("Radio component state", () => {
        it("should render a radio unchecked by default", () => {
            render(<Radio labelPlacement="left">ui-test</Radio>);
            expect(screen.getByRole("radio")).not.toBeChecked();
        });
        it("should render a radio checked when is true", () => {
            render(
                <Radio labelPlacement="left" defaultChecked={true}>
                    ui-test
                </Radio>,
            );
            expect(screen.getByRole("radio")).toBeChecked();
        });
        it("should toggle state when clicked", () => {
            render(<Radio labelPlacement="left">ui-test</Radio>);
            const label = screen.getByLabelText("ui-test");
            fireEvent.click(label);
            expect(screen.getByRole("radio")).toBeChecked();
        });
    });
});
