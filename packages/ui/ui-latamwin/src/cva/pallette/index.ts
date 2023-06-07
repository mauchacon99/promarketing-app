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

export const palletteCva = cva(classNameDefaultProps, {
    variants: {
        variant: {
            primaryDefault: "bg-primary-default",
            primaryFocus: "bg-primary-focus",
            primaryContent: "bg-primary-content",
            secondaryDefault: "bg-secondary-default",
            secondaryFocus: "bg-secondary-focus",
            secondaryContent: "bg-secondary-content",
            accentDefault: "bg-accent-default",
            accentFocus: "bg-accent-focus",
            accentContent: "bg-accent-content",
            neutralDefault: "bg-neutral-default",
            neutralFocus: "bg-neutral-focus",
            neutralContent: "bg-neutral-content",
            infoDefault: "bg-info-default",
            infoContent: "bg-info-content",
            successDefault: "bg-success-default",
            successContent: "bg-success-content",
            warningDefault: "bg-warning-default",
            warningContent: "bg-warning-content",
            errorDefault: "bg-error-default",
            errorContent: "bg-error-content",
            base100: "bg-base-100",
            base200: "bg-base-200",
            base300: "bg-base-300",
            baseContent: "bg-base-content",
            lightColor: "bg-light",
            darkColor: "bg-dark",
        },
    },
});
