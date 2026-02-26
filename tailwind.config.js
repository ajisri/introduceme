/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'swiss-red': "var(--swiss-red)",
                'swiss-gray': "var(--swiss-gray)",
                'swiss-black': "var(--swiss-black)",
                'pop-blue': "var(--pop-blue)",
                'pop-green': "var(--pop-green)",
                'pop-pink': "var(--pop-pink)",
                'pop-yellow': "var(--pop-yellow)",
            },
            borderWidth: {
                'swiss': 'var(--border-width)',
            }
        },
    },
    plugins: [],
}
