import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0E0F14",
        bg2: "#14151C",
        neon: "#22F5A3",
        neonDark: "#16C784",
        muted: "#9CA3AF",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
