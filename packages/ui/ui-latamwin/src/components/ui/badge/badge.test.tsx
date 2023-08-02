import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cx } from "class-variance-authority";
import Badge from "./badge";
import classNameVariantColorScheme from "@cva/ui/badge/classNameVariantColorScheme";
import classNameVariantVariety from "@cva/ui/badge/classNameVariantVariety";

describe("BadgeComponent", () => {
    it("should render a badge with the text '1'", () => {
        render(<Badge data-testid="badge-id" content={1} />);
        const rendered = screen.getByTestId("badge-id");
        expect(rendered).toHaveTextContent("1");
    });
    it("should render a badge with the svg children", () => {
        render(
            <Badge data-testid="badge-id" content={1}>
                <svg aria-label="icon" />
            </Badge>,
        );
        expect(screen.getByLabelText("icon")).toBeInTheDocument();
    });
    it("should render a badge with the correct variety", () => {
        render(
            <Badge data-testid="badge-id" content={"123"} variety="single" />,
        );
        const rendered = screen.getByTestId("badge-id");
        expect(rendered).toHaveClass(cx(classNameVariantVariety.multidigit));
    });
    describe("should render a badge with the color scheme primary", () => {
        it("should render with the variety single", () => {
            render(
                <Badge
                    data-testid="badge-id"
                    colorScheme="primary"
                    content={1}
                    variety="single"
                />,
            );
            const rendered = screen.getByTestId("badge-id");
            expect(rendered).toHaveClass(
                cx(classNameVariantColorScheme.primary),
            );
            expect(rendered).toHaveClass(cx(classNameVariantVariety.single));
        });
        it("should render with the variety multidigit", () => {
            render(
                <Badge
                    data-testid="badge-id"
                    colorScheme="primary"
                    content={12}
                    variety="multidigit"
                />,
            );
            const rendered = screen.getByTestId("badge-id");
            expect(rendered).toHaveClass(
                cx(classNameVariantVariety.multidigit),
            );
        });
        it("should render with the variety digit", () => {
            render(
                <Badge
                    data-testid="badge-id"
                    colorScheme="primary"
                    content={1}
                    variety="digit"
                />,
            );
            const rendered = screen.getByTestId("badge-id");
            expect(rendered).toHaveClass(cx(classNameVariantVariety.digit));
        });
    });
    describe("should render a badge with the color scheme error", () => {
        it("should render with the variety single", () => {
            render(
                <Badge
                    data-testid="badge-id"
                    colorScheme="error"
                    content={1}
                    variety="single"
                />,
            );
            const rendered = screen.getByTestId("badge-id");
            expect(rendered).toHaveClass(cx(classNameVariantColorScheme.error));
            expect(rendered).toHaveClass(cx(classNameVariantVariety.single));
        });
        it("should render with the variety multidigit", () => {
            render(
                <Badge
                    data-testid="badge-id"
                    colorScheme="primary"
                    content={12}
                    variety="multidigit"
                />,
            );
            const rendered = screen.getByTestId("badge-id");
            expect(rendered).toHaveClass(
                cx(classNameVariantVariety.multidigit),
            );
        });
        it("should render with the variety digit", () => {
            render(
                <Badge
                    data-testid="badge-id"
                    colorScheme="primary"
                    content={1}
                    variety="digit"
                />,
            );
            const rendered = screen.getByTestId("badge-id");
            expect(rendered).toHaveClass(cx(classNameVariantVariety.digit));
        });
    });
});
