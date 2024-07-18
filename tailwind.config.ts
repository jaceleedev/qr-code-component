import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1F314F',
        gray: '#7D889E',
        'light-gray': '#D5E1EF',
      },
      screens: {
        mobile: { max: '375px' },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      fontSize: {
        heading: '1.375rem', // 22px -> 1.375rem
        body: '0.9375rem', // 15px -> 0.9375rem
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
      lineHeight: {
        normal: '1.2',
      },
      letterSpacing: {
        body: '0.01175rem', // 0.188px -> 0.01175rem
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const typographyComponents = {
        '.heading': {
          fontFamily: theme('fontFamily.outfit') || 'var(--font-outfit)',
          fontSize: theme('fontSize.heading') || '1.375rem',
          fontWeight: theme('fontWeight.bold') || '700',
          lineHeight: theme('lineHeight.normal') || '1.2',
          color: theme('colors.dark-navy') || '#1F314F',
        },
        '.body': {
          fontFamily: theme('fontFamily.outfit') || 'var(--font-outfit)',
          fontSize: theme('fontSize.body') || '0.9375rem',
          fontWeight: theme('fontWeight.regular') || '400',
          lineHeight: theme('lineHeight.normal') || '1.2',
          color: theme('colors.gray') || '#7D889E',
          letterSpacing: theme('letterSpacing.body') || '0.01175rem',
        },
      };
      addComponents(typographyComponents);
    }),
  ],
};
export default config;
