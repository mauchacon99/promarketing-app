import React, { PropsWithChildren, useContext } from "react";
import { navDropdownContext } from "../nav-dropdown/nav-dropdown";
import { cx } from "class-variance-authority";
/**
 * NavDropdownList.
 *
 * @param props - NavDropdownProps.
 * @returns JSX.Element.
 */
const NavDropdownList = (props: PropsWithChildren) => {
    const { children } = {
        ...props,
    };
    const { isOpen } = useContext(navDropdownContext);

    return (
        <ul
            className={cx(
                "bg-base-content absolute left-0 top-full mt-[9px] min-w-[176px] list-none rounded-[14px] pb-[16.52px] pl-[13.15px] pr-[14.41px] pt-[14.45px]",
                {
                    "pointer-events-none invisible": !isOpen,
                },
            )}
        >
            {children}
        </ul>
    );
};

export default NavDropdownList;
