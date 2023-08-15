/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
            transitionTimingFunction: {
                'cubic': 'cubic-bezier(0.65, 0, 0.15, 1)',
              },
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				noise: "url('/noise-bg.png')",
				noiseGradient: "url('/noise-bg.png'), linear-gradient(225deg, rgba(19, 53, 52, 1) 15%, rgba(9, 16, 35, 1) 40%)",
			},
			backgroundColor: {
				deepSpace: 'rgba(9, 16, 35, 1)',
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			keyframes: {
				rotateAnimation: {
					'0%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				scaleAnimation: {
					'0%': { transform: 'scale(0)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				scaleAnimation: 'scaleAnimation 1s ease-in-out',
				rotateAnimation: 'rotateAnimation 60s linear infinite',
			},
		},
	},
	plugins: [],
};
