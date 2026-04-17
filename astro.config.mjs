// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kangminjurobot.github.io',
	base: '/gaemi-loci-manual',
	integrations: [
		starlight({
			title: 'GAEMI Loci',
			customCss: [
				'./src/styles/custom.css',
			],
			logo: {
				src: './src/assets/gaemi-loci-logo.svg',
				replacesTitle: true,
			},
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			locales: {
				root: { label: '한국어', lang: 'ko' },
				en: { label: 'English', lang: 'en' },
			},
			sidebar: [
				{
					label: '소개',
					translations: { en: 'Introduction' },
					autogenerate: { directory: 'introduction' },
				},
{
					label: '대시보드',
					translations: { en: 'Dashboard' },
					autogenerate: { directory: 'dashboard' },
				},
				{
					label: '서비스 구역 에디터',
					translations: { en: 'Service Area Editor' },
					autogenerate: { directory: 'service-area-editor' },
				},
				{
					label: '내비게이션 에디터',
					translations: { en: 'Navigation Editor' },
					autogenerate: { directory: 'path-editor' },
				},
				{
					label: '베이스 맵 에디터',
					translations: { en: 'Base Map Editor' },
					autogenerate: { directory: 'base-map-editor' },
				},
{
					label: '3D 맵 에디터 / 맵 보정',
					translations: { en: '3D Map Editor / Map Correction' },
					autogenerate: { directory: 'map-correction' },
				},
				{
					label: '파일 관리',
					translations: { en: 'File Manager' },
					autogenerate: { directory: 'file-manager' },
				},
			],
		}),
	],
});
