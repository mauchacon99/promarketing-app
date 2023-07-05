import plugin from "tailwindcss/plugin";

module.exports = {
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("pressed", "&:active");
        }),
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "var(--color-primary-100)",
                    200: "var(--color-primary-200)",
                    300: "var(--color-primary-300)",
                    400: "var(--color-primary-400)",
                    500: "var(--color-primary-500)",
                    600: "var(--color-primary-600)",
                    700: "var(--color-primary-700)",
                    800: "var(--color-primary-800)",
                    900: "var(--color-primary-900)",
                    950: "var(--color-primary-950)",
                    gradient: "var(--color-primary-gradient)",
                },
                secondary: {
                    100: "var(--color-secondary-100)",
                    200: "var(--color-secondary-200)",
                    300: "var(--color-secondary-300)",
                    400: "var(--color-secondary-400)",
                    500: "var(--color-secondary-500)",
                    600: "var(--color-secondary-600)",
                    700: "var(--color-secondary-700)",
                    800: "var(--color-secondary-800)",
                    900: "var(--color-secondary-900)",
                    950: "var(--color-secondary-950)",
                    gradient: "var(--color-secondary-gradient)",
                },
                accent: {
                    100: "var(--color-accent-100)",
                    200: "var(--color-accent-200)",
                    300: "var(--color-accent-300)",
                    400: "var(--color-accent-400)",
                    500: "var(--color-accent-500)",
                    600: "var(--color-accent-600)",
                    700: "var(--color-accent-700)",
                    800: "var(--color-accent-800)",
                    900: "var(--color-accent-900)",
                    950: "var(--color-accent-950)",
                },
                neutral: {
                    50: "var(--color-neutral-50)",
                    100: "var(--color-neutral-100)",
                    200: "var(--color-neutral-200)",
                    300: "var(--color-neutral-300)",
                    400: "var(--color-neutral-400)",
                    500: "var(--color-neutral-500)",
                    600: "var(--color-neutral-600)",
                    700: "var(--color-neutral-700)",
                    800: "var(--color-neutral-800)",
                    900: "var(--color-neutral-900)",
                    950: "var(--color-neutral-950)",
                },
                info: {
                    100: "var(--color-info-100)",
                    900: "var(--color-info-900)",
                },
                error: {
                    100: "var(--color-error-100)",
                    900: "var(--color-error-900)",
                },
                success: {
                    100: "var(--color-success-100)",
                    900: "var(--color-success-900)",
                },
                warning: {
                    100: "var(--color-warning-100)",
                    900: "var(--color-warning-900)",
                },
            },
            fontFamily: {
                serif: ["ui-serif", "RobotoCondensed", "serif"],
                slab: ["ui-slab-serif", "AlfaSlabOne", "slab-serif"],
                sans: ["ui-sans-serif", "Poppins", "sans-serif"],
            },
        },
    },
};
