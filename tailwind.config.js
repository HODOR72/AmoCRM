const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: colors.white,
			gray: '#E4E5EA',
			darkGray: '#656566',
			black: '#0E1014',
			blackLight: '#25262C',
			purple: '#833AB4',
			red: '#FD1D1D',
			orange: '#FCB045',
			blue: '#4077F3',
		},
		screens: {
			max: { max: '1430px' },
			xxl: { max: '1280px' },
			xxl2: { max: '960px' },
			xxl3: { max: '913px' },
			xl: { max: '880px' },
			xl2: { max: '780px' },
			xl3: { max: '624px' },
			sm: { max: '600px' },
			sm2: { max: '500px' },
			sm3: { max: '400px' },
		},
		keyframes: {
			fade: {
				from: { opacity: 0 },
				to: { opacity: 1 },
			},
		},
		animation: {
			fade: 'fade .5s ease-in-out',
		},
	},
	plugins: [],
}
