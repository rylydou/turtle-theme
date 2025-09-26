import * as fs from 'fs/promises';
import { type CodeColorTheme, type Theme } from './types';
import puppeteer from 'puppeteer';
import { version } from '../../package.json';


export const exportTheme = async (theme: Theme) => {
	const template = theme.template;

	const themeColors = new Map(Object.entries(theme.colors));

	const parseColor = (token: string) => {
		if (token.indexOf('/') < 0) {
			return themeColors.get(token) || '#ff0000';
		}
		let [tokenPart, alphaPart] = token.split('/');
		if (!tokenPart) return '#ff0';
		tokenPart = tokenPart.trim();

		alphaPart ||= "100";
		alphaPart = alphaPart.trim();

		let color = themeColors.get(tokenPart) || '#ff0000';
		color += (Math.round(Number(alphaPart) * 255)).toString(16);
		return color;
	};

	let output = {
		$schema: 'vscode://schemas/color-theme',
		colors: {},
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: []
	} as CodeColorTheme;

	output.colors = Object.fromEntries(
		Object.entries(template.workbench)
			.map(([vsc_id, token]) =>
				[vsc_id, parseColor(token)]
			)
	);

	for (const rule of template.tokens) {
		output.tokenColors.push({
			scope: rule.scope,
			settings: {
				fontStyle: rule.settings.fontStyle,
				foreground: rule.settings.foreground ? parseColor(rule.settings.foreground) : undefined,
			}
		});
	}

	const json = JSON.stringify(output);
	await fs.writeFile(`themes/${theme.id}.json`, json);

	await exportThemeImage(theme);
};


export const exportThemeImage = async (theme: Theme) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 600, height: 350, deviceScaleFactor: 4, });
	const htmlFile = Bun.file("src/theme-builder/theme.html");

	let html = await htmlFile.text();

	const scheme: [string, string][] = [
		["Theme Name", theme.name],
		["#000000", theme.colors['editor.bg']],
		["#ffffff", theme.colors['editor.fg']],
		["#ff0000", theme.colors['code.red']],
		["#ffff00", theme.colors['code.yellow']],
		["#00ff00", theme.colors['code.green']],
		["#00ffff", theme.colors['code.blue']],
		["#ff00ff", theme.colors['code.pink']],
		["#aaaaaa", theme.colors['editor.mg']],
		["#202020", theme.colors['editor.border']],
		["#303030", theme.colors['editor.gutter']],
		["#808080", theme.colors['code.punctuation']],
		["#404040", theme.colors['code.punctuation.less']],
		["green", theme.colors['code.comment']],
		["{major}", version.split('.')[0]!],
		["{minor}", version.split('.')[1]!],
		["{patch}", version.split('.')[2]!],
	];

	for (const [key, value] of scheme) {
		html = html.replaceAll(key, value);
	}


	await page.setContent(html, { waitUntil: 'networkidle0' });

	const outputPath = `images/themes/${theme.id}.webp`;

	await page.screenshot({
		path: outputPath as any,
		fullPage: true,
		omitBackground: true,
	});

	await browser.close();
	console.log(`Image saved to ${outputPath}`);
};
