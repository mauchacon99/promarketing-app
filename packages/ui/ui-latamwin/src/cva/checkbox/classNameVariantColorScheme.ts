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
        "peer-disabled:peer-checked:border-neutral-100",
        "peer-disabled:peer-checked:bg-neutral-100",
    ],
    light: [
        //Default props
        "bg-transparent",
        "border-neutral-100",
        // Before properties of the component
        "before:bg-primary-50",
        //Peer color props
        "peer-checked:bg-neutral-100",
        "peer-checked:before:bg-neutral-100",
        "peer-disabled:border-primary-50",
        "peer-disabled:peer-checked:border-neutral-100",
        "peer-disabled:peer-checked:bg-neutral-100",
        //Pressed props
        "pressed:border-neutral-100",
    ],
};

export default classNameVariantColorScheme;
