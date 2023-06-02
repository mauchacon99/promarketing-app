/* eslint-disable @typescript-eslint/indent */
import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonCva } from "../../cva/button-base-cva";

// TODO: fix indent eslint
export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  /** This text button. */
  label: string;
  /** Represent value is loading.*/
  loading?: boolean;
}
