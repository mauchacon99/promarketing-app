const classNameVariantError = [
    "text-neutral-content",
    "placeholder-neutral-content",
    "border-error-content",
    // Styles when component is in state HOVER
    "hover:border-error-content",
    // Styles when component is in state FOCUSED
    "focus:border-error-content",
    // Styles when component is in state PRESS
    "pressed:border-error-content",
];
const classNameVariantDefault = [
    "text-neutral-content",
    "placeholder-neutral-content",
    "border-secondary-focus",
    // Styles when component is in state HOVER
    "hover:border-primary-focus",
    // Styles when component is in state FOCUSED
    "focus:border-primary-focus",
    // Styles when component is in state PRESS
    "pressed:border-primary-focus",
];
const classNameVariantSuccess = [
    "text-neutral-content",
    "placeholder-neutral-content",
    "border-success-content",
    // Styles when component is in state HOVER
    "hover:border-success-content",
    // Styles when component is in state FOCUSED
    "focus:border-success-content",
    // Styles when component is in state PRESS
    "pressed:border-success-content",
];

export const classNameVariantColorScheme = {
    default: classNameVariantDefault,
    success: classNameVariantSuccess,
    error: classNameVariantError,
};
export default classNameVariantColorScheme;
