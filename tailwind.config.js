/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Noto Sans TC"', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                chic: {
                    black: '#1a1a1a',
                    white: '#f4f4f0',
                    orange: '#ff4f00',
                    gray: '#a1a1aa'
                }
            },
            animation: {
                'marquee': 'marquee 60s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'modal-pop': 'modal-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-up-fade': 'slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'modal-pop': {
                    '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px) rotateX(10deg)' },
                    '60%': { opacity: '1', transform: 'scale(1.02) translateY(-5px) rotateX(0deg)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
                'slide-up-fade': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
