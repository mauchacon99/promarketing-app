const classNameVariantError = [
    "text-neutral-500",
    "placeholder-neutral-200",
    "border-error-900",
    // Styles when component is in state HOVER
    "hover:border-error-900",
    // Styles when component is in state FOCUSED
    "focus:border-error-900",
    // Styles when component is in state PRESS
    "pressed:border-error-900",
];
const classNameVariantDefault = [
    "text-neutral-500",
    "placeholder-neutral-200",
    "border-secondary-500",
    // Styles when component is in state PRESS
    "pressed:drop-shadow-xl",
];
const classNameVariantSuccess = [
    "text-neutral-500",
    "placeholder-neutral-200",
    "border-success-900",
    // Styles when component is in state HOVER
    "hover:border-success-900",
    // Styles when component is in state FOCUSED
    "focus:border-success-900",
    // Styles when component is in state PRESS
    "pressed:border-success-900",
];

export const classNameVariantColorScheme = {
    default: classNameVariantDefault,
    success: classNameVariantSuccess,
    error: classNameVariantError,
};
export default classNameVariantColorScheme;
