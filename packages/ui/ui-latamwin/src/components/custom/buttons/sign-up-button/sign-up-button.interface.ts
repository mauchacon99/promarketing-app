import { ButtonHTMLAttributes } from "react";
export interface SignUpButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Text of the SignUpButton button. */
    label?: string;
}
