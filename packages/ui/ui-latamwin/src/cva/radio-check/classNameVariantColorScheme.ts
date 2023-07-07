const classNameVariantColorScheme = {
    accent: [
        //Circle props
        "bg-transparent",
        "border-accent-900",
        //Circle shadow color props
        "before:bg-accent-100",
        //Peer color props
        "peer-checked:bg-accent-900",
        "peer-disabled:border-neutral-100",
        "peer-disabled:peer-checked:bg-neutral-100",
        "peer-disabled:before:bg-neutral-100",
    ],
    light: [
        //Circle props
        "bg-transparent",
        "border-neutral-100",
        //Circle shadow color props
        "before:bg-primary-50",
        //Peer color props
        "peer-checked:bg-neutral-100",
        "peer-disabled:border-primary-50",
        "peer-disabled:peer-checked:bg-primary-50",
        "peer-disabled:before:bg-neutral-100",
        //Pressed props
        "pressed:border-neutral-500",
    ],
};

export default classNameVariantColorScheme;
