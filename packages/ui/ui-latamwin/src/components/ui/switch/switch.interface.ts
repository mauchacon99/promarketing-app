import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { switchCva } from "../../../../src/cva/ui/switch";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "defaultValue"
>;

export interface SwitchProps
    extends HTMLInputProps,
        VariantProps<typeof switchCva> {
    /** Default value of the component.*/
    defaultValue?: boolean;
    /** Disabled value of the component.*/
    isDisabled?: boolean;
}
