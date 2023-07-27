const classNameVariantColorScheme = {
    accent: [
        //Default props
        "bg-transparent",
        "border-accent-900",
        // Before properties of the component
        "before:bg-accent-900",
        //Peer color props
        "peer-checked:bg-accent-900",
        "peer-checked:before:bg-accent-100",
        "peer-disabled:border-primary-50",
        "peer-disabled:peer-checked:border-neutral-200",
        "peer-disabled:peer-checked:bg-neutral-200",
    ],
    light: [
        //Default props
        "bg-transparent",
        "border-neutral-200",
        "border",
        "rounded",
        // Before properties of the component
        "before:bg-neutral-100",
        "before:w-9",
        "before:h-9",

        //Peer color props
        "peer-checked:before:bg-neutral-100",
        "peer-disabled:border-neutral-200",
        "peer-disabled:bg-neutral-100",
        "peer-disabled:peer-checked:border-neutral-200",
        "peer-disabled:peer-checked:bg-red-900",
        //Pressed props
        "pressed:border-neutral-500",
    ],
};

export default classNameVariantColorScheme;
