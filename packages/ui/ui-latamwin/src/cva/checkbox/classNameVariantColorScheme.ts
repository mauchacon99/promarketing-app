const classNameVariantColorScheme = {
    accent: [
        //Default props
        "bg-transparent",
        "border-accent-default",
        // Before properties of the component
        "before:bg-accent-default",
        //Peer color props
        "peer-checked:bg-accent-default",
        "peer-checked:before:bg-accent-content",
        "peer-disabled:border-base-100",
        "peer-disabled:peer-checked:border-neutral-content",
        "peer-disabled:peer-checked:bg-neutral-content",
    ],
    light: [
        //Default props
        "bg-transparent",
        "border-neutral-content",
        // Before properties of the component
        "before:bg-base-100",
        //Peer color props
        "peer-checked:bg-neutral-content",
        "peer-checked:before:bg-neutral-content",
        "peer-disabled:border-base-100",
        "peer-disabled:peer-checked:border-neutral-content",
        "peer-disabled:peer-checked:bg-neutral-content",
        //Pressed props
        "pressed:border-neutral-content/50",
    ],
};

export default classNameVariantColorScheme;
