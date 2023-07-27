export const classNameDefault = [
    // Styles of the component
    "flex",
    "items-center",
    "justify-center",
    "w-5",
    "h-5",
    "text-xs",
    "border",
    "rounded",
    "duration-300",
    "[&>*]:opacity-0",
    // Before properties of the component
    "before:content-['']",
    "before:absolute",
    "before:rounded-full",
    "before:w-9",
    "before:h-9",
    "before:z-[-1]",
    "before:opacity-0",
    "before:transition-all",
    "before:duration-300",
    // Peer properties of the component
    "peer",
    "peer-checked:before:w-9",
    "peer-checked:before:h-9",
    "peer-checked:[&>*]:opacity-100",
    "peer-disabled:before:hidden",
    // Hover properties of the component
    "hover:before:opacity-100",
    "peer-checked:hover:before:opacity-50",
    // Pressed properties of the component
    "pressed:before:opacity-100",
    "peer-checked:pressed:before:opacity-100",
];
