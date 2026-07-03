/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2028',
          'red-dark': '#B01820',
          'red-light': '#F04048',
          green: '#0E8A3A',
          'green-dark': '#0A6A2C',
          'green-light': '#1FB055',
        },
        ink: {
          DEFAULT: '#111827',
          soft: '#374151',
          muted: '#6B7280',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F9FAFB',
          muted: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': '5rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
