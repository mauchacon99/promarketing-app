import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cx } from "class-variance-authority";
import { clockCva } from "@cva/ui/clock";
import Clock from "./clock";

describe("Clock Component", () => {
    it("should render a clock with the time provided", () => {
        const { container } = render(<Clock hour="16:30" />);
        expect(container.firstChild).toHaveTextContent("16:30");
    });

    it("should render default classes", () => {
        const { container } = render(<Clock hour="16:30" />);
        expect(container.firstChild).toHaveClass(cx(clockCva()));
    });
});
