// See the Tailwind default theme values here:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config */
module.exports = {
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],

    content: [
        './app/views/**/*.{erb,haml,html,slim}',
    ],

    // All the default values will be compiled unless they are overridden below
    theme: {
        // Extend (add to) the default theme in the `extend` key
        extend: {
        },
    },

    // Opt-in to TailwindCSS future changes
    future: {},
}
