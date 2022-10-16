import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  safelist: [
    'text-priamry',
    'text-success',
    'text-warning',
    'text-danger',
    'text-info',
    'border-primary',
    'border-current',
    'border-danger',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#f5d836',
        primaryDark: '#dfc42e',
        success: '#1ea944',
        info: '#3577f5',
        warning: '#d67b27',
        danger: '#d62e2e',
        black: '#0a0a0a',
        dark: '#464646',
        white: '#ffffff',
        light: '#aebcca',
      },
    },
    spacing: {
      fs: '1em',
    },
  },
})
