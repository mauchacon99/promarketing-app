import { ButtonHTMLAttributes } from "react";
export interface PopButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** View state of the button. */
    view?: boolean;
    /** Color variant of the button. */
    colorScheme: "accent";
    /** AlertInput variant state of the button. */
    alertInput?: boolean;
}
