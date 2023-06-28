const classNameVariantColorScheme = {
    accent: [
        //Circle props
        "bg-transparent",
        "border-accent-default",
        //Circle shadow color props
        "before:bg-accent-content",
        //Peer color props
        "peer-checked:bg-accent-default",
        "peer-disabled:border-neutral-content",
        "peer-disabled:peer-checked:bg-neutral-content",
        "peer-disabled:before:bg-neutral-content",
    ],
    light: [
        //Circle props
        "bg-transparent",
        "border-neutral-content",
        //Circle shadow color props
        "before:bg-base-100",
        //Peer color props
        "peer-checked:bg-neutral-content",
        "peer-disabled:border-base-100",
        "peer-disabled:peer-checked:bg-base-100",
        "peer-disabled:before:bg-neutral-content",
        //Pressed props
        "pressed:border-neutral-focus",
    ],
};

export default classNameVariantColorScheme;
