import React, { useEffect } from "react";
import { Preview } from "@storybook/react";

import { DEFAULT_THEME, withTailwindTheme } from "./decorator";
import "ui-latamwin/src/styles.scss";
import "./../styles.scss";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        theme: {
            name: "Themes",
            description: "Global theme for skin",
            defaultValue: DEFAULT_THEME,
            toolbar: {
                icon: "paintbrush",
                // Array of plain string values or MenuItem shape (see below)
                items: [
                    { value: "winchile", title: "Winchile", left: "🌞" },
                    {
                        value: "casinoenchile",
                        title: "CasinoEnChile",
                        left: "🌛",
                    },
                ],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
    },
    decorators: [withTailwindTheme],
};

export default preview;
