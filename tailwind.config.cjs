/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      xsm: "389px",
      sm: "480px",
      md: "768px", //iPad Mini
      // mlg: "872px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      accent: "#ffd700",
      "accent-faded": "#ffd70050",
      "darker-yellow": "#eab308",
      "accent-light": "#58C9E8",
      "accent-dark": "#055677",
      green: "#789b48",
      "dark-green": "#286142",
      transparent: "transparent",
      "almost-transparent": "0000ff",
      "sky-blue": "#03a9f4",
      "brand-yellow": "#d5ca9e",
      "bg-blue-1": "#03a9f4",
      "bg-blue-2": "#03a9f499",
      "bg-blue-3": "#03a9f490",
      "bg-blue-4": "#03a9f498",
      "bg-blue-5": "#005475",
      "white-text": "#fbfbfb",
      "light-mode-q-bg": "#1f293750",
      "dark-mode-q-bg": "#1f2937",
    },
    container: {
      center: true,
    },
    darkMode: "class",
    extend: {
      listStyleImage: {
        checkmark: "url('/checkmark.png')",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin")],
};
