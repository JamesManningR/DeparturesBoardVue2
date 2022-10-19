import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

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
      safe: 'env(safe-area-inset-top)',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.m-safe': {
          marginTop: 'env(safe-area-inset-top)',
          marginRight: 'env(safe-area-inset-right)',
          marginBottom: 'env(safe-area-inset-bottom)',
          marginLeft: 'env(safe-area-inset-left)',
        },
        '.mx-safe': {
          marginRight: 'env(safe-area-inset-right)',
          marginLeft: 'env(safe-area-inset-left)',
        },
        '.my-safe': {
          marginTop: 'env(safe-area-inset-top)',
          marginBottom: 'env(safe-area-inset-bottom)',
        },
        '.mt-safe': {
          marginTop: 'env(safe-area-inset-top)',
        },
        '.mr-safe': {
          marginRight: 'env(safe-area-inset-right)',
        },
        '.mb-safe': {
          marginBottom: 'env(safe-area-inset-bottom)',
        },
        '.ml-safe': {
          marginLeft: 'env(safe-area-inset-left)',
        },
        '.p-safe': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingRight: 'env(safe-area-inset-right)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.px-safe': {
          paddingRight: 'env(safe-area-inset-right)',
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.py-safe': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.pt-safe': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.pr-safe': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.pb-safe': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.pl-safe': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.min-h-screen-safe': {
          minHeight: [
            'calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))',
            '-webkit-fill-available',
          ],
        },
        '.h-screen-safe': {
          height: [
            'calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))',
            '-webkit-fill-available',
          ],
        },
      }

      addUtilities(utilities)
    }),
  ],
})
