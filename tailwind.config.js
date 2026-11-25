/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1687D9',
        deep: '#075A96',
        ink: '#111827',
        muted: '#64748B',
        surface: '#F5FAFD',
        lightblue: '#E4F4FF',
        softblue: '#C8E8FA',
        line: '#D9E7F0',
        navy: '#08192B',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        premium: '0 20px 45px -25px rgba(7, 90, 150, 0.35)',
        card: '0 10px 30px -18px rgba(17, 24, 39, 0.25)',
        lift: '0 30px 60px -30px rgba(7, 90, 150, 0.45)',
      },
      maxWidth: {
        shell: '1240px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
