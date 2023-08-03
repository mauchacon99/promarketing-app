import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { inputBottomLineCva } from "@cva/ui/input";
import Input from "./input";

describe("InputComponent", () => {
    it("should render a textbox input", () => {
        const { getByRole } = render(<Input data-testid="test-input" />);
        expect(getByRole("textbox")).toBeInTheDocument();
    });

    describe("Input State", () => {
        it("should update value correctly", () => {
            render(<Input data-testid="test-input" />);
            const inputElement = screen.getByTestId("test-input");
            fireEvent.change(inputElement, { target: { value: "test value" } });
            expect(inputElement).toHaveValue("test value");
        });

        it("calls onChange callback when input value changes", () => {
            const onChangeMock = jest.fn();
            render(<Input onChange={onChangeMock} data-testid="test-input" />);
            const inputElement = screen.getByTestId("test-input");

            fireEvent.change(inputElement, { target: { value: "t" } });

            expect(onChangeMock).toHaveBeenCalledTimes(1);
        });

        it("renders disabled input component", () => {
            render(<Input data-testid="test-input" disabled />);
            const inputElement = screen.getByTestId("test-input");

            expect(inputElement).toBeInTheDocument();
            expect(inputElement).toBeDisabled();
        });
    });

    describe("Input ui helpers", () => {
        it("should render with bottom line", () => {
            const { getAllByText } = render(
                <Input data-testid="test-input" hasBottomLine />,
            );

            // TODO: improve this test
            const allSpans = getAllByText(
                (_, element) => element?.tagName.toLowerCase() === "span",
            );

            expect(allSpans[0]).toHaveClass(
                inputBottomLineCva({ colorScheme: "default" }),
            );
        });

        it("should display helper test", () => {
            const { getByText } = render(
                <Input data-testid="test-input" helperText="help" />,
            );
            expect(getByText("help")).toBeTruthy();
        });

        it("should display left element", () => {
            const el = <svg data-testid="left-icon" />;
            const { queryByTestId } = render(
                <Input data-testid="test-input" leftElement={el} />,
            );
            expect(queryByTestId("left-icon")).toBeTruthy();
        });

        it("should display right element", () => {
            const el = <svg data-testid="right-icon" />;
            const { queryByTestId } = render(
                <Input data-testid="test-input" rightElement={el} />,
            );
            expect(queryByTestId("right-icon")).toBeTruthy();
        });
    });
});
