import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "ru-RU",
	title: "Example",
	titleTemplate: ":title - Example",
	description: "Example",
	srcDir: "content",
	cleanUrls: true,

	head: [
		["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
		["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
	],

	themeConfig: {
		logo: "/favicon.svg",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Главная", link: "/" },
		],

		// lastUpdated: {
		// 	text: "Обновлено",
		// 	formatOptions: {
		// 		dateStyle: "medium",
		// 		timeStyle: "short",
		// 		forceLocale: true,
		// 	},
		// },

		docFooter: {
			prev: "Предыдущая страница",
			next: "Следующая страница",
		},

		sidebarMenuLabel: "Навигация",
		returnToTopLabel: "На верх",
		externalLinkIcon: true,
		darkModeSwitchLabel: "Тема",
	},

	vite: {
		build: {
			target: ["es2022", "chrome100", "safari16"],
			cssTarget: ["es2022", "chrome100", "safari16"],
		},
	}
});
