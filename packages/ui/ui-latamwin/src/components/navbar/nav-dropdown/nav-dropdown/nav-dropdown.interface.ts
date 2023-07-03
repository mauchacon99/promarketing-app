import { PropsWithChildren } from "react";

export interface NavDropdownProps extends PropsWithChildren {
    /** */
    defaultOpen?: boolean;
}
export interface NavDropdownContext extends PropsWithChildren {
    /** */
    defaultOpen: boolean;
    /** */
    isOpen: boolean;
    /** */
    toggleDropdown: () => void;
}
