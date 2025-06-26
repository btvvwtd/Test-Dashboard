/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes your JSX files
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#1e2233',
                'custom-blue':'#3b82f6',
                'custom-green': '#3bb979',
                'custom-yellow': '#fdd261',
                'custom-red': '#b93b3b',
                'site-bg': '#121622', // Site-wide background
                'bg-search-bg': '#1e2233', // Search bar background
                'custom-border': '#1e2233',
                'dark-blue': '#1e2233',
                'primary-blue': '#3b82f6',
                'primary-blue-hover': '#2563eb',


            },
        },
    },
    plugins: [],
}