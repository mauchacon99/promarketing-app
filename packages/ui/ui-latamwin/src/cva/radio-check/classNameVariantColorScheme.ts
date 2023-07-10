const classNameVariantColorScheme = {
    accent: [
        //Circle props
        "bg-transparent",
        "border-accent-900",
        //Circle shadow color props
        "before:bg-accent-100",
        //Peer color props
        "peer-checked:bg-accent-900",
        "peer-disabled:border-neutral-200",
        "peer-disabled:peer-checked:bg-neutral-200",
        "peer-disabled:before:bg-neutral-200",
    ],
    light: [
        //Circle props
        "bg-transparent",
        "border-neutral-200",
        //Circle shadow color props
        "before:bg-neutral-100",
        //Peer color props
        "peer-checked:bg-neutral-100",
        "peer-disabled:border-neutral-200",
        "peer-disabled:bg-neutral-100",
        "peer-disabled:peer-checked:bg-neutral-200",
        "peer-disabled:before:bg-neutral-100",
        //Pressed props
        "pressed:border-neutral-500",
    ],
};

export default classNameVariantColorScheme;
