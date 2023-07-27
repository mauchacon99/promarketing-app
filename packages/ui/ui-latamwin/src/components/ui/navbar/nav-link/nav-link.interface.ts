import { PropsWithChildren } from "react";

export interface NavLinkProps extends PropsWithChildren {
    /** Represents the value if the element is active.*/
    active?: boolean;
}
