/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const fs = require('fs');

const noiseBitmap = fs.readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('${noiseDataUri}')`
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                custom: {
                    'primary': '#3B82F6',
                    'secondary': '#10B981',
                    'accent': '#F59E0B',
                    'neutral': '#1F2937',
                    'base-100': '#FFFFFF',
                    'info': '#3B82F6',
                    'success': '#10B981',
                    'warning': '#F59E0B',
                    'error': '#EF4444',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
