export const classNameDefault = [
    // Styles of the component
    "flex",
    "items-center",
    "justify-center",
    "border",
    "duration-300",
    "w-5",
    "h-5",
    "rounded-full",
    // Before properties of the component
    "before:content-['']",
    "before:absolute",
    "before:z-[-1]",
    "before:opacity-0",
    "before:transition-all",
    "before:duration-300",
    "before:w-9",
    "before:h-9",
    "before:rounded-full",
    // Peer properties of the component
    "peer",
    "peer-checked:after:opacity-100",
    "peer-checked:before:w-8",
    "peer-checked:before:h-8",
    "peer-disabled:before:hidden",
    "peer-disabled:peer-checked:border-2",
    //Hover properties of the component
    "hover:before:opacity-100",
    //Children properties
    "[&>*]:opacity-0",
    "peer-checked:[&>*]:opacity-100",
];
