import React, { PropsWithChildren, useId } from "react";

/**
 * NavDropdownItem.
 *
 * @param props - NavDropdownItemProps.
 * @returns JSX.Element.
 */
const NavDropdownItem = (props: PropsWithChildren) => {
    const { children } = {
        ...props,
    };
    const keyItem = useId();

    return (
        <li
            key={keyItem}
            className="text-primary-900 border-primary-500 flex items-center border-b-[.5px] p-2.5 pb-[14.26px] text-sm font-medium last:border-b-0"
        >
            {children}
        </li>
    );
};

export default NavDropdownItem;
