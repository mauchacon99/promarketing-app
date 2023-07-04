const classNameVariantColorScheme = {
    accent: [
        //Circle props
        "bg-transparent",
        "border-accent-900",
        //Circle shadow color props
        "before:bg-accent-100",
        //Inner circle color props
        "after:bg-accent-900",
        //Peer color props
        "peer-disabled:border-neutral-100",
        "peer-disabled:before:bg-neutral-100",
        "peer-disabled:after:bg-neutral-100",
    ],
    light: [
        //Circle props
        "bg-transparent",
        "border-neutral-100",
        //Circle shadow color props
        "before:bg-base-50",
        //Inner circle color props
        "after:bg-neutral-100",
        //Peer color props
        "peer-disabled:border-neutral-100",
        "peer-disabled:before:bg-neutral-100",
        "peer-disabled:after:bg-neutral-100",
    ],
};

export default classNameVariantColorScheme;
