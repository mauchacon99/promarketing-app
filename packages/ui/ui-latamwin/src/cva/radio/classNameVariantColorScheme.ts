const classNameVariantColorScheme = {
    accent: [
        //Circle props
        "bg-transparent",
        "border-accent-default",
        //Circle shadow color props
        "before:bg-accent-content",
        //Inner circle color props
        "after:bg-accent-default",
        //Peer color props
        "peer-disabled:border-neutral-content",
        "peer-disabled:before:bg-neutral-content",
        "peer-disabled:after:bg-neutral-content",
    ],
    light: [
        //Circle props
        "bg-transparent",
        "border-neutral-content",
        //Circle shadow color props
        "before:bg-base-100",
        //Inner circle color props
        "after:bg-neutral-content",
        //Peer color props
        "peer-disabled:border-neutral-content",
        "peer-disabled:before:bg-neutral-content",
        "peer-disabled:after:bg-neutral-content",
    ],
};

export default classNameVariantColorScheme;
