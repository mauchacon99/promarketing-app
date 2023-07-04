const classNamePrimary = [
    "bg-primary-900",
    "text-light",
    // Styles when component is in state HOVER
    "hover:bg-primary-500",
    // Styles when component is in state HOVER
    "pressed:bg-primary-500",
    // Styles when component is in state DISABLED
    "disabled:bg-base-50",
    "disabled:text-neutral-100",
];

const classNameAccent = [
    "bg-accent-900",
    "text-primary-900",
    // Styles when component is in state HOVER
    "hover:bg-accent-500",
    // Styles when component is in state PRESS
    "pressed:bg-accent-500",
    // Styles when component is in state DISABLED
    "disabled:text-neutral-100",
    "disabled:bg-accent-100",
];

const classNameLight = [
    "bg-light",
    "text-primary-900",
    // Styles when component is in state HOVER
    "hover:bg-primary-100",
    // Styles when component is in state PRESS
    "pressed:bg-primary-500",
    "pressed:text-light",
    // Styles when component is in state DISABLED
    "disabled:text-neutral-100",
    "disabled:bg-base-50",
];

const classNameVariantColorScheme = {
    primary: classNamePrimary,
    accent: classNameAccent,
    light: classNameLight,
};
export default classNameVariantColorScheme;
