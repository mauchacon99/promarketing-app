import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import classNameVariantColorScheme from "@cva/ui/icon-button/classNameVariantColorScheme";
import { cx } from "class-variance-authority";
import IconButton from "./icon-button";
import classNameVariantShadow from "@cva/ui/icon-button/classNameVariantShadow";

describe("IconButton Component", () => {
    it("should render a icon button with the svg children", () => {
        const icon = <svg data-testid="test-icon" />;
        const { getByTestId } = render(
            <IconButton data-testid={"test-button"}>{icon}</IconButton>,
        );
        expect(getByTestId("test-icon")).toBeInTheDocument();
    });

    it("should render a icon button with extra classes", () => {
        render(<IconButton className="p-12" data-testid="test-button" />);
        const rendered = screen.getByTestId("test-button");
        expect(rendered).toHaveClass(
            cx(classNameVariantColorScheme.primary, "p-12"),
        );
    });

    describe("IconButton shadow", () => {
        it("should render with sm shadow", () => {
            render(<IconButton shadow="sm" data-testid="test-button" />);
            const rendered = screen.getByTestId("test-button");
            expect(rendered).toHaveClass(cx(classNameVariantShadow.sm));
        });

        it("should render with md shadow", () => {
            render(<IconButton shadow="md" data-testid="test-button" />);
            const rendered = screen.getByTestId("test-button");
            expect(rendered).toHaveClass(cx(classNameVariantShadow.md));
        });

        it("should render with lg shadow", () => {
            render(<IconButton shadow="lg" data-testid="test-button" />);
            const rendered = screen.getByTestId("test-button");
            expect(rendered).toHaveClass(cx(classNameVariantShadow.lg));
        });
    });

    describe("IconButton colorScheme", () => {
        it("should render with primary color scheme", () => {
            render(
                <IconButton colorScheme="primary" data-testid="test-button" />,
            );
            const rendered = screen.getByTestId("test-button");
            expect(rendered).toHaveClass(
                cx(classNameVariantColorScheme.primary),
            );
        });

        it("should render with accent color scheme", () => {
            render(
                <IconButton colorScheme="accent" data-testid="test-button" />,
            );
            const rendered = screen.getByTestId("test-button");
            expect(rendered).toHaveClass(
                cx(classNameVariantColorScheme.accent),
            );
        });

        it("should render with light color scheme", () => {
            render(
                <IconButton colorScheme="light" data-testid="test-button" />,
            );
            const rendered = screen.getByTestId("test-button");
            expect(rendered).toHaveClass(cx(classNameVariantColorScheme.light));
        });
    });
});
