/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: 'https://shocodes.vercel.app', // Replace with your actual domain
	generateRobotsTxt: true, // Generate robots.txt
	generateIndexSitemap: false, // Change to true if you need an index sitemap
	exclude: ['/admin', '/dashboard'], // Paths to exclude from the sitemap
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
			},
		],
	},
};

module.exports = config;
