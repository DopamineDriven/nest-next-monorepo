module.exports = {
  content: {
    files: ["./components/**/*.{js,ts,jsx,tsx}", "./**/*.{js,ts,jsx,tsx}"]
  },
  theme: {
    extend: {
      maxWidth: {
        "10xl": "173.75rem", // 2780 px
        "9xl": "121rem", // 1936px
        "8xl": "96rem" // 1536px
      },
      screens: {
        250: "250px",
        275: "275px",
        300: "300px",
        325: "325px",
        350: "350px",
        xs: "375px",
        425: "425px",
        475: "475px",
        550: "55opx",
        sm: "640px",
        md: "768px",
        896: "896px",
        lg: "1024px",
        xl: "1280px",
        1360: "1360px",
        "2xl": "1440px",
        1720: "1720px",
        2040: "2040px",
        2360: "2360px",
        2780: "2780px"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        hero: {
          transform: "translate3d(0px, 0px, 0px)"
        }
      },
      animation: {
        wiggle: "wiggle 10s ease-in-out infinite",
        hero: "hero 1s ease-in-out infinite",
        slowPing: "pulse 10s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      boxShadow: {
        "outline-2": "0 0 0 2px var(--accents-0)",
        "outline-normal": "0 0 0 2px var(--accents-2)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
        cardHover:
          "0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)"
      },
      fontSize: {
        xxs: [
          "0.50rem",
          {
            lineHeight: "0.75rem"
          }
        ]
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ]
};
