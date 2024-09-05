export default defineAppConfig({
	ui: {
		strategy: 'override',
		primary: 'orange',
		gray: 'cool',
		button: {
			color: {
				primary: {
					solid: 'bg-theme-orange-80 text-theme-grey-10',
				},
			},
		},
		card: {
			ring: 'ring-2 ring-theme-gray-10',
			shadow: 'shadow-[4px_4px_0px_2px_#000]',
		},
	},
});