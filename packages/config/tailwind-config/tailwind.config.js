module.exports = {
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        dark: "#000000",
        "base-100": "var(--color-base-100)",
        "base-200": "var(--color-base-200)",
        "base-300": "var(--color-base-300)",
        "base-content": "var(--color-base-content)",
        primary: {
          default: "var(--color-primary-default)",
          focus: "var(--color-primary-focus)",
          content: "var(--color-primary-content)",
        },
        secondary: {
          default: "var(--color-secondary-default)",
          focus: "var(--color-secondary-focus)",
          content: "var(--color-secondary-content)",
        },
        accent: {
          default: "var(--color-accent-default)",
          focus: "var(--color-accent-focus)",
          content: "var(--color-accent-content)",
        },
        neutral: {
          default: "var(--color-neutral-default)",
          focus: "var(--color-neutral-focus)",
          content: "var(--color-neutral-content)",
        },
        info: {
          default: "var(--color-info)",
          content: "var(--color-info-content)",
        },
        error: {
          default: "var(--color-error)",
          content: "var(--color-error-content)",
        },
        success: {
          default: "var(--color-success)",
          content: "var(--color-success-content)",
        },
        warning: {
          default: "var(--color-warning)",
          content: "var(--color-warning-content)",
        },
      },
      fontFamily: {
        roboto: ["RobotoCondensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
      },
    },
  },
};
