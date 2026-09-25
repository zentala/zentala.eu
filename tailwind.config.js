/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

// Calmer, lower-saturation replacements for Tailwind's default palette.
// Components across the site still write `bg-blue-900`, `text-teal-600`
// etc. — overriding the palette here softens every one of those usages at
// once, instead of editing each component's literal colour classes.
// See CLAUDE.md → "Theme tokens" for the rule this enforces.
const muted = {
  gray: {
    50: '#fafafa', 100: '#f0f1f3', 200: '#e2e4e8', 300: '#cbced5', 400: '#9ea3ad',
    500: '#767c88', 600: '#585e6b', 700: '#40454f', 800: '#2a2e37', 900: '#1c1f26', 950: '#121419',
  },
  blue: {
    50: '#eef2fa', 100: '#dbe4f4', 200: '#b9cbe8', 300: '#93aed9', 400: '#6c8fc6',
    500: '#4d72ad', 600: '#3b5c91', 700: '#304a75', 800: '#283c5e', 900: '#21324c', 950: '#151f30',
  },
  green: {
    50: '#eef6f0', 100: '#d9ecdf', 200: '#b3d8c0', 300: '#8abd9e', 400: '#64a17f',
    500: '#4c8465', 600: '#3c6a52', 700: '#315542', 800: '#294435', 900: '#22392c', 950: '#131f18',
  },
  red: {
    50: '#f9eeee', 100: '#f1d8d8', 200: '#e3b3b3', 300: '#d08a8a', 400: '#ba6666',
    500: '#a24c4c', 600: '#833c3c', 700: '#683131', 800: '#542929', 900: '#452323', 950: '#271313',
  },
  yellow: {
    50: '#f9f4e7', 100: '#f0e3c2', 200: '#e2c98a', 300: '#ceaa5a', 400: '#b78c3d',
    500: '#997231', 600: '#7a5b28', 700: '#614821', 800: '#4d391c', 900: '#402f19', 950: '#241a0d',
  },
  indigo: {
    50: '#eeeef8', 100: '#dbdcf0', 200: '#b9bce2', 300: '#9497cf', 400: '#7175ba',
    500: '#575ba1', 600: '#464a83', 700: '#393c68', 800: '#2f3153', 900: '#282a44', 950: '#191a2b',
  },
  purple: {
    50: '#f4eef8', 100: '#e6d9f0', 200: '#cdb3e2', 300: '#b28acf', 400: '#9667ba',
    500: '#7c4d9f', 600: '#643d81', 700: '#503267', 800: '#402a53', 900: '#362444', 950: '#211327',
  },
  teal: {
    50: '#eaf5f4', 100: '#d0e9e6', 200: '#a2d4cd', 300: '#6fb7ae', 400: '#4a978d',
    500: '#397971', 600: '#2e615a', 700: '#264e49', 800: '#1f403c', 900: '#1a3532', 950: '#0e1e1c',
  },
  cyan: {
    50: '#eaf6f8', 100: '#d0ecf0', 200: '#a1d9e1', 300: '#6cc0ce', 400: '#47a3b3',
    500: '#38859a', 600: '#2c6b7d', 700: '#245665', 800: '#1e4551', 900: '#1a3943', 950: '#0f2127',
  },
  emerald: {
    50: '#eaf7f0', 100: '#d1ecdf', 200: '#a2dabf', 300: '#6fc19c', 400: '#48a27c',
    500: '#398365', 600: '#2e6a52', 700: '#265542', 800: '#1f4435', 900: '#1a3a2e', 950: '#0e2019',
  },
}

export default {
  // The theme is the .dark class on <html> (src/layouts/Layout.astro), not the OS
  // setting. Without this, every `dark:` utility follows prefers-color-scheme and
  // renders dark blocks inside the light theme.
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: muted,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        body: 'var(--leading-body)',
      },
      letterSpacing: {
        eyebrow: 'var(--tracking-eyebrow)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        section: 'var(--space-section)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"], // Enable light and dark themes
    darkTheme: "dark", // Use "dark" as the dark theme
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [typography, daisyui],
}
