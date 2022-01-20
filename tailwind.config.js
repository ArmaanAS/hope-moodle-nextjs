const defaultTheme = require('tailwindcss/defaultTheme');
const svgToDataUri = require('mini-svg-data-uri');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            hr: {
              borderColor: theme('colors.gray.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            h1: {
              textAlign: 'center',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${12 / 24}em !important`,
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.gray.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'ul > li': {
              paddingLeft: '0.75em',
              lineHeight: '1.25em',
            },
            'ul > li::before': {
              content: '-',
              width: '0.75em',
              height: '0.125em',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none',
            },
            pre: {
              color: theme('colors.gray.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            p: {
              marginBottom: '0.5em !important',
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              // width: 'auto',
              width: 'max-content',
              marginLeft: 'auto',
              marginRight: 'auto',
              overflowX: 'scroll',
            },
            thead: {
              color: theme('colors.gray.700'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody td': {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: theme('fontWeight.medium'),
              // fontSize: theme('fontSize.sm')[0],
              // lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.sm')[0],
            },
            'tbody td:first-child': {
              color: theme('colors.sky.400') + '!important',
            },
            'tbody td:not(:first-child)': {
              color: theme('colors.indigo.400') + '!important',
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            borderColor: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.100'),
            },
            'h2, h3, h4': {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
            },
            hr: {
              borderColor: theme('colors.gray.200'),
              opacity: '0.05',
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            a: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            'blockquote > p': {
              color: theme('colors.gray.200'),
            },
            'thead th': {
              color: theme('colors.gray.200'),
            },
            'tbody td': {
              color: theme('colors.gray.300'),
            },
            'thead': {
              borderBottomColor: theme('colors.gray.600'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.800'),
            },
            'tbody td:first-child': {
              color: theme('colors.sky.500') + '!important',
            },
            'tbody td:not(:first-child)': {
              color: theme('colors.indigo.300') + '!important',
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        full: '100%',
      },
      width: {
        xl: '36rem',
      },
      maxWidth: {
        '4.5xl': '60rem',
        '8xl': '90rem',
      },
      maxHeight: (theme) => ({
        sm: '30rem',
        '(screen-18)': `calc(100vh - ${theme('spacing.18')})`,
      }),
      boxShadow: {
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
      transitionDuration: {
        1500: '1.5s',
      },
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`,
      }),
      scale: {
        80: '0.8',
      },
      skew: {
        '-20': '-20deg',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    function ({ addUtilities, theme, addBase }) {
      let backgroundSize = '7.07px 7.07px';
      let backgroundImage = (color) =>
        `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`;
      let colors = Object.entries(theme('backgroundColor')).filter(
        ([, value]) => typeof value === 'object' && value[400] && value[500]
      );

      addUtilities(
        Object.fromEntries(
          colors.map(([name, colors]) => {
            let backgroundColor = colors[400] + '1a'; // 10% opacity
            let stripeColor = colors[500] + '80'; // 50% opacity

            return [
              `.bg-stripes-${name}`,
              {
                backgroundColor,
                backgroundImage: backgroundImage(stripeColor),
                backgroundSize,
              },
            ];
          })
        )
      );

      addUtilities({
        '.bg-stripes-white': {
          backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
          backgroundSize,
        },
      });

      addUtilities({
        '.ligatures-none': {
          fontVariantLigatures: 'none',
        },
      });
    },
    require('@tailwindcss/typography'),
  ],
};
