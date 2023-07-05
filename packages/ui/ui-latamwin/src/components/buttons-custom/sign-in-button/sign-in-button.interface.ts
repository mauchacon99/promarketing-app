import { ButtonHTMLAttributes } from "react";
export interface SignInButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Text of the SignInButton button. */
    label?: string;
}
