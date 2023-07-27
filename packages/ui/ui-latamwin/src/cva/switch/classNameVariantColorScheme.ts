const classNameVariantColorScheme = {
    accent: [
        //Middle bar color props
        "bg-primary-100",
        //Circle shadow color props
        "before:bg-accent-100",
        //Circle color props
        "after:bg-accent-900",
        "after:shadow-[1px_1px_4px_rgba(0,0,0,0.25)]",
        //Peer color props
        "peer-disabled:after:bg-neutral-200",
    ],
    light: [
        //Middle bar color props
        "bg-neutral-200",
        //Circle shadow color props
        "before:bg-neutral-100",
        "hover:z-2",
        "pressed:z-2",
        //Circle color props
        "after:bg-neutral-50",
        "after:shadow-[1px_1px_4px_rgba(0,0,0,0.25)]",
        //Peer color props
        "peer-disabled:after:bg-neutral-100",
    ],
};

export default classNameVariantColorScheme;
