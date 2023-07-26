import React from "react";
import { useEffect } from "react";
import themes from "./../themes";
export const DEFAULT_THEME = "winchile";

export const withTailwindTheme = (Story, context) => {
    const { theme } = context.globals;

    useEffect(() => {
        const htmlTag = document.documentElement;

        themes[theme || DEFAULT_THEME]?.forEach(({ name, value }) => {
            htmlTag.style.setProperty(name, value);
        });

        // Set the "data-mode" attribute on the iFrame html tag
        htmlTag.setAttribute("class", theme || DEFAULT_THEME);
    }, [theme]);

    return <Story />;
};
