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
        it("should render input with placeholder", () => {
            const { getByPlaceholderText } = render(
                <Input
                    data-testid="test-input"
                    placeholder="test placeholder"
                />,
            );
            const inputElement = getByPlaceholderText("test placeholder");

            expect(inputElement).toHaveAttribute(
                "placeholder",
                "test placeholder",
            );
        });

        it("should render with bottom line", () => {
            const { getAllByText } = render(
                <Input data-testid="test-input" hasBottomLine />,
            );

            const allSpans = getAllByText(
                (_, element) => element?.tagName.toLowerCase() === "span",
            );

            expect(allSpans[0]).toHaveClass(
                inputBottomLineCva({ colorScheme: "default" }),
            );
        });

        it("should not render bottom line when is disabled", () => {
            const { container } = render(
                <Input data-testid="test-input" hasBottomLine disabled />,
            );

            expect(container.querySelector("span")).not.toBeTruthy();
        });

        it("should render with bottom line with success color scheme", () => {
            const { getAllByText } = render(
                <Input
                    data-testid="test-input"
                    hasBottomLine
                    colorScheme="success"
                />,
            );

            const allSpans = getAllByText(
                (_, element) => element?.tagName.toLowerCase() === "span",
            );

            expect(allSpans[0]).toHaveClass(
                inputBottomLineCva({ colorScheme: "success" }),
            );
        });

        it("should render with bottom line with error color scheme", () => {
            const { getAllByText } = render(
                <Input
                    data-testid="test-input"
                    hasBottomLine
                    colorScheme="error"
                />,
            );

            const allSpans = getAllByText(
                (_, element) => element?.tagName.toLowerCase() === "span",
            );

            expect(allSpans[0]).toHaveClass(
                inputBottomLineCva({ colorScheme: "error" }),
            );
        });

        it("should display helper test", () => {
            const { getByText } = render(
                <Input data-testid="test-input" helperText="help" />,
            );
            expect(getByText("help")).toBeTruthy();
        });

        it("should display left element with correct classes", () => {
            const element = <svg data-testid="left-icon" />;
            const { queryByTestId } = render(
                <Input
                    data-testid="test-input"
                    leftElement={element}
                    leftElementClasses="w-4 h-4"
                />,
            );
            const leftElement = queryByTestId("left-icon");
            expect(leftElement).toBeTruthy();
            expect(leftElement?.parentElement).toHaveClass("w-4 h-4");
        });

        it("should display right element with correct classes", () => {
            const element = <svg data-testid="right-icon" />;
            const { queryByTestId } = render(
                <Input
                    data-testid="test-input"
                    rightElement={element}
                    rightElementClasses="w-4 h-4"
                />,
            );
            const rightElement = queryByTestId("right-icon");
            expect(rightElement).toBeTruthy();
            expect(rightElement?.parentElement).toHaveClass("w-4 h-4");
        });

        it("should display right and left elements", () => {
            const rightElement = <svg data-testid="right-icon" />;
            const leftElement = <svg data-testid="left-icon" />;
            const { queryByTestId } = render(
                <Input
                    data-testid="test-input"
                    rightElement={rightElement}
                    leftElement={leftElement}
                />,
            );
            expect(queryByTestId("right-icon")).toBeTruthy();
            expect(queryByTestId("left-icon")).toBeTruthy();
        });

        it("should not display left and right elements", () => {
            const { container } = render(
                <Input data-testid="test-input" hasBottomLine disabled />,
            );

            expect(container.querySelectorAll("span").length).toBe(0);
        });
    });
});
