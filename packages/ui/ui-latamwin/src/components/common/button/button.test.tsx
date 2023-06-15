import React from "react";
import { render, screen } from "@testing-library/react";
import { cx } from "class-variance-authority";
import "@testing-library/jest-dom";
import Button from "./button";
import {
    classNamePrimaryContained,
    classNamePrimaryOutlined,
    classNamePrimaryText,
} from "@cva/button/compoundVariantsPrimary";
import {
    classNameSecondaryOutlined,
    classNameSecondaryText,
    classNameSecondaryContained,
} from "@cva/button/compoundVariantsSecondary";

describe("ButtonComponent", () => {
    it("should render a button with the text ui-test", () => {
        render(<Button data-testid={"test-button"}>ui-test</Button>);
        expect(screen.getByTestId("test-button")).toHaveTextContent("ui-test");
    });
    describe("should render a button with the color scheme primary", () => {
        it("should render with the variety text", () => {
            render(
                <Button
                    data-testid={"test-button"}
                    colorScheme="primary"
                    variety="text"
                >
                    Test
                </Button>,
            );
            expect(screen.getByTestId("test-button")).toHaveClass(
                cx(classNamePrimaryText),
            );
        });
        it("should render with the variety outlined", () => {
            render(
                <Button
                    data-testid={"test-button"}
                    colorScheme="primary"
                    variety="outlined"
                >
                    Test
                </Button>,
            );
            expect(screen.getByTestId("test-button")).toHaveClass(
                cx(classNamePrimaryOutlined),
            );
        });
        it("should render with the variety contained", () => {
            render(
                <Button
                    data-testid={"test-button"}
                    colorScheme="primary"
                    variety="contained"
                >
                    Test
                </Button>,
            );
            expect(screen.getByTestId("test-button")).toHaveClass(
                cx(classNamePrimaryContained),
            );
        });
    });
    describe("should render a button with the color scheme secondary", () => {
        it("should render with the variety text", () => {
            render(
                <Button
                    data-testid={"test-button"}
                    colorScheme="secondary"
                    variety="text"
                >
                    Test
                </Button>,
            );
            expect(screen.getByTestId("test-button")).toHaveClass(
                cx(classNameSecondaryText),
            );
        });
        it("should render with the variety outlined", () => {
            render(
                <Button
                    data-testid={"test-button"}
                    colorScheme="secondary"
                    variety="outlined"
                >
                    Test
                </Button>,
            );
            expect(screen.getByTestId("test-button")).toHaveClass(
                cx(classNameSecondaryOutlined),
            );
        });
        it("should render with the variety contained", () => {
            render(
                <Button
                    data-testid={"test-button"}
                    colorScheme="secondary"
                    variety="contained"
                >
                    Test
                </Button>,
            );
            expect(screen.getByTestId("test-button")).toHaveClass(
                cx(classNameSecondaryContained),
            );
        });
    });
});
