/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 5s linear infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        'up-down': 'upDown 5s ease-in-out infinite',
        'down-up': 'downUp 5s ease-in-out infinite',
        'grow': 'grow 5s ease-in-out infinite',
        'grow-bottom': 'growBottom 5s ease-in-out infinite',
        'grow-once': 'growOnce 3s ease-in-out forwards', 
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(-20%)' }, 
          '50%': { transform: 'translateY(20%)' }, 
        },
        downUp: {
          '0%, 100%': { transform: 'translateY(20%)' }, 
          '50%': { transform: 'translateY(-20%)' }, 
        },
        grow: {
          '0%, 100%': { transform: 'scale(0.85)' }, 
          '50%': { transform: 'scale(1)' }, 
        },
        growBottom: {
          '0%, 100%': { transform: 'scale(0.85)' }, 
          '50%': { transform: 'scale(1)' }, 
        },
        growOnce: {
          '0%': { transform: 'scale(0.5)' },  
          '100%': { transform: 'scale(1)' },  
        },
      }
    },
  },
  plugins: [],
}
