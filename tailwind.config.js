/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: "hsl(var(--PrimaryWhite))",
        bgWhiteVariant: "hsl(var(--BgWhiteVariant))",
        secondaryColor: "hsl(var(--SecondaryColor))",
        darkColor: "hsl(var(--DarkColor))",
        strokeColor: "hsl(var(--StrokeColor))",
        textLightGrey: "hsl(var(--TextLightGrey))",
        textBlack: "hsl(var(--TextBlack))",
        textDarkGray: "hsl(var(--TextDarkGray))",
        purpleColor: "hsl(var(--PurpleColor))",
        blueLightColor: "hsl(var(--BlueLightColor))",
        blueDarkColor: "hsl(var(--BlueDarkColor))",
      },
    },
  },
  plugins: [],
}