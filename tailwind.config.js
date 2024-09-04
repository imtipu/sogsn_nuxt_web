// Docs: https://tailwindcss.com/docs/configuration
export default {
    content: [
        './components/**/*.{html,js,vue,ts}',
        './layouts/**/*.{html,js,vue,ts}',
        './pages/**/*.{html,js,vue,ts}',
        './content/**/*.{html,js,vue,ts}',
        './plugins/**/*.{html,js,vue,ts}',
        './app.vue',
        './error.vue',
        './nuxt.config.js',
    ],
    theme: {
        extend: {
            colors: {
                theme: {
                    orange: {
                        '65': '#FF8D4C',
                        '70': '#FF9E66',
                        '75': '#FFAE80',
                        '80': '#FFBE99',
                        '90': '#FFDECC',
                        '95': '#FFEFE5',
                        '97': '#FFF5F0',
                        '99': '#FFFCFA',
                        '50': '#fff5ed',
                        '100': '#ffe9d4',
                        '200': '#ffcfa8',
                        '300': '#ffae71',
                        '350': '#FF9E66',
                        '400': '#ff8d4c',
                        '500': '#fe5d11',
                        '600': '#ef4307',
                        '700': '#c62e08',
                        '800': '#9d270f',
                        '900': '#7e2210',
                        '950': '#440e06',
                    },
                    gray: {
                        10: '#191919',
                        15: '#262626',
                        20: '#333333',
                        30: '#4C4C4D',
                        35: '#59595A',
                        40: '#656567',
                        60: '#98989A',
                        70: '#B3B3B3',
                    }
                }
            }
        }
    },
    plugins: [],
}