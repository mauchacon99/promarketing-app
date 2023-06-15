const classNamePrimary = [
    "bg-primary-default",
    "text-light",
    // Styles when component is in state HOVER
    "hover:bg-primary-focus",
    // Styles when component is in state HOVER
    "pressed:bg-primary-focus",
    // Styles when component is in state DISABLED
    "disabled:bg-base-100",
    "disabled:text-neutral-content",
];

const classNameAccent = [
    "bg-accent-default",
    "text-primary-default",
    // Styles when component is in state HOVER
    "hover:bg-accent-focus",
    // Styles when component is in state PRESS
    "pressed:bg-accent-focus",
    // Styles when component is in state DISABLED
    "disabled:text-neutral-content",
    "disabled:bg-accent-content",
];

const classNameLight = [
    "bg-light",
    "text-primary-default",
    // Styles when component is in state HOVER
    "hover:bg-primary-content",
    // Styles when component is in state PRESS
    "pressed:bg-primary-focus",
    "pressed:text-light",
    // Styles when component is in state DISABLED
    "disabled:text-neutral-content",
    "disabled:bg-base-100",
];

const classNameVariantColorScheme = {
    primary: classNamePrimary,
    accent: classNameAccent,
    light: classNameLight,
};
export default classNameVariantColorScheme;
