import { cva } from "class-variance-authority";

const classNameDefaultProps = [
    "block",
    "w-[75px]",
    "h-[53px]",
    "border",
    "border-black",
    "rounded-[10px]",
    "mr-[10px]",
];

export const varieties = {
    primaryDefault: "bg-primary-900",
    primaryFocus: "bg-primary-500",
    primaryContent: "bg-primary-100",
    secondaryDefault: "bg-secondary-900",
    secondaryFocus: "bg-secondary-500",
    secondaryContent: "bg-secondary-100",
    accentDefault: "bg-accent-900",
    accentFocus: "bg-accent-500",
    accentContent: "bg-accent-100",
    neutralDefault: "bg-neutral-900",
    neutralFocus: "bg-neutral-500",
    neutralContent: "bg-neutral-100",
    infoDefault: "bg-info-900",
    infoContent: "bg-info-100",
    successDefault: "bg-success-default",
    successContent: "bg-success-100",
    warningDefault: "bg-warning-900",
    warningContent: "bg-warning-100",
    errorDefault: "bg-error-900",
    errorContent: "bg-error-100",
    base100: "bg-base-50",
    base200: "bg-base-950",
    base300: "bg-base-300",
    baseContent: "bg-base-100",
    lightColor: "bg-light",
    darkColor: "bg-dark",
};

export const palletteCva = cva(classNameDefaultProps, {
    variants: {
        variant: varieties,
    },
});
