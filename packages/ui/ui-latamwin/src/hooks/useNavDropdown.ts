import { useState } from "react";

interface UseNavDropdown {
    /** */
    defaultOpen: boolean;
}
/**
 * Toggle useNavDropdown.
 *
 * @param value Value default open Dropdown.
 * @returns Function and values hooks.
 */
export const useNavDropdown = (value: UseNavDropdown) => {
    const { defaultOpen } = value;
    const [isOpen, setIsOpen] = useState(defaultOpen);

    /**
     * Toggle dropdown.
     */
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        toggleDropdown,
    };
};
