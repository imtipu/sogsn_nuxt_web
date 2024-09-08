// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	app: {
		head: {
			charset: 'utf-8',
			title: 'App',
			viewport:
				'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
			bodyAttrs: {
				// class: 'bg-gray-100 dark:bg-gray-900'
			},
		},
		rootAttrs: {
			id: '__app',
		},
	},
	modules: [
		'@nuxt/ui',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		// '@pinia-plugin-persistedstate/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'@nuxtjs/robots',
		'@nuxtjs/google-fonts',
		// '@nuxtjs/device',
		'@nuxt/content',
		'@nuxt/icon',
		'@vite-pwa/nuxt',
		'nuxt-swiper',
		'nuxt-svgo',
		'nuxt-gtag',
		'dayjs-nuxt',
		'nuxt-lodash',
		'@nuxtjs/seo',
		'nuxt-tiptap-editor',
		// '@formkit/auto-animate/nuxt',
	],
	// build: {
	// 	transpile: ['pinia-plugin-persistedstate'],
	// },
	googleFonts: {
		families: {
			Roboto: true,
			Raleway: true,
			Outfit: true,
		},
	},
	// device: {
	// 	refreshOnResize: true,
	// },
	colorMode: {
		preference: 'light',
		fallback: 'light',
	},
	gtag: {},
	robots: {
		mergeWithRobotsTxtPath: 'assets/robots.txt',
	},
});