import React from "react";
import { PalletteProps } from "./pallette.interface";
import { palletteCva } from "../../cva/pallette";

/**
 * Pallette.
 *
 * @param props - PalletteProps.
 * @returns JSX.Element.
 */
const Pallette = (props: PalletteProps) => {
    const { label, palletteItems } = {
        ...props,
    };

    return (
        <>
            <span className="font-roboto text-bold text-bold mb-2 block text-[40px]">
                {label}
            </span>
            {palletteItems?.map((variant, index) => {
                return (
                    <div key={index} className="mb-4 flex items-center">
                        <div className={palletteCva({ variant })}></div>
                        <span className="font-roboto block text-lg uppercase">
                            {variant}
                        </span>
                    </div>
                );
            })}
        </>
    );
};

export default Pallette;
