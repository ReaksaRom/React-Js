/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React components
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Include Flowbite React components
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin, // Use the imported plugin
  ],
};

export default config;
