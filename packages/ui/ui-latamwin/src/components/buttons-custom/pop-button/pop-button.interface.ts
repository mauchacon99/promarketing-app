import { ButtonHTMLAttributes } from "react";
export interface PopButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** View state of the button. */
    isVisible?: boolean;
}
