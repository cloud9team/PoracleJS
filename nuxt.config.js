
module.exports = {
	loading: {
		color: 'purple'
	},
    plugins: [
        { src: '~/plugins/monsterData', ssr: false }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/static/starchy.ico',
      },
    ],
	modules: ['@nuxtjs/axios', 'nuxt-leaflet', 'nuxt-svg'],

	axios: {
      retry: { retries: 3 }
    },


	css: [
	    '@/assets/css/PoracleMap.css'
	],

	env: {
		tileServer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
		startPos: "59.4372155, 24.7453688",
		startZoom: "13",
		minZoom: "11",
		maxZoom: "16"
	}
}