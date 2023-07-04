import { ButtonHTMLAttributes } from "react";
export interface SignUpProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Text of the SignUp button. */
    label?: string;
}
