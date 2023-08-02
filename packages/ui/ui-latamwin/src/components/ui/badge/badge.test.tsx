import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from "./badge";
import { cx } from "class-variance-authority";
import classNameVariantColorScheme from "@cva/ui/badge/classNameVariantColorScheme";
import classNameVariantVariety from "@cva/ui/badge/classNameVariantVariety";

const testRootId = "badge-id";
const testContent = "1";

describe("BadgeComponent", () => {
    it(`should render a badge with the text ${testContent}`, () => {
        render(<Badge data-testid={testRootId} content={testContent} />);
        const rendered = screen.getByTestId(testRootId);
        expect(rendered).toHaveTextContent(testContent);
    });
    it(`should render a badge with the svg children`, () => {
        render(
            <Badge data-testid={testRootId} content={testContent}>
                <svg aria-label="icon" />
            </Badge>,
        );
        expect(screen.getByLabelText("icon")).toBeInTheDocument();
    });

    describe("should render a badge with the color scheme primary", () => {
        it("should render with the variety single", () => {
            render(
                <Badge
                    data-testid={testRootId}
                    colorScheme="primary"
                    content={testContent}
                    variety="single"
                />,
            );
            const rendered = screen.getByTestId(testRootId);
            expect(rendered).toHaveClass(
                cx(classNameVariantColorScheme.primary),
            );
            expect(rendered).toHaveClass(cx(classNameVariantVariety.single));
        });
        it("should render with the variety multidigit", () => {
            render(
                <Badge
                    data-testid={testRootId}
                    colorScheme="primary"
                    content={testContent}
                    variety="multidigit"
                />,
            );
            const rendered = screen.getByTestId(testRootId);
            expect(rendered).toHaveClass(
                cx(classNameVariantVariety.multidigit),
            );
        });
        it("should render with the variety digit", () => {
            render(
                <Badge
                    data-testid={testRootId}
                    colorScheme="primary"
                    content={testContent}
                    variety="digit"
                />,
            );
            const rendered = screen.getByTestId(testRootId);
            expect(rendered).toHaveClass(cx(classNameVariantVariety.digit));
        });
    });
    describe("should render a badge with the color scheme error", () => {
        it("should render with the variety single", () => {
            render(
                <Badge
                    data-testid={testRootId}
                    colorScheme="error"
                    content={testContent}
                    variety="single"
                />,
            );
            const rendered = screen.getByTestId(testRootId);
            expect(rendered).toHaveClass(cx(classNameVariantColorScheme.error));
            expect(rendered).toHaveClass(cx(classNameVariantVariety.single));
        });
        it("should render with the variety multidigit", () => {
            render(
                <Badge
                    data-testid={testRootId}
                    colorScheme="primary"
                    content={testContent}
                    variety="multidigit"
                />,
            );
            const rendered = screen.getByTestId(testRootId);
            expect(rendered).toHaveClass(
                cx(classNameVariantVariety.multidigit),
            );
        });
        it("should render with the variety digit", () => {
            render(
                <Badge
                    data-testid={testRootId}
                    colorScheme="primary"
                    content={testContent}
                    variety="digit"
                />,
            );
            const rendered = screen.getByTestId(testRootId);
            expect(rendered).toHaveClass(cx(classNameVariantVariety.digit));
        });
    });
});
