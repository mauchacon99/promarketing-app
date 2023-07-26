const classNameVariantColorScheme = {
    accent: [
        //Middle bar color props
        "bg-primary-content",
        //Circle shadow color props
        "before:bg-accent-content",
        //Circle color props
        "after:bg-accent-default",
        "after:shadow-[1px_1px_4px_rgba(0,0,0,0.25)]",
        //Peer color props
        "peer-disabled:after:bg-neutral-content",
    ],
    light: [
        //Middle bar color props
        "bg-neutral-content",
        //Circle shadow color props
        "before:bg-base-100",
        //Circle color props
        "after:bg-light",
        "after:shadow-[1px_1px_4px_rgba(0,0,0,0.25)]",
        //Peer color props
        "peer-disabled:after:bg-base-100",
    ],
};

export default classNameVariantColorScheme;
