import { ButtonHTMLAttributes } from "react";
export interface SignInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Text of the SignIn button. */
    label?: string;
}
