import * as fs from 'fs/promises'
import { CodeColorTheme, Theme } from './types'


export const to_vsc_theme = async (theme: Theme) => {
	const template = theme.template

	const theme_colors = new Map(Object.entries(theme.colors))

	const get_color = (token: string) => {
		if (token.indexOf('/') < 0) {
			return theme_colors.get(token) || '#ff0000'
		}
		const [token_part, alpha_part] = token.split(' / ')
		console.log(token_part)
		let color = theme_colors.get(token_part) || '#ff0000'
		color += (Number(alpha_part) * 255).toString(16)
		return color
	}

	let output = {
		$schema: 'vscode://schemas/color-theme',
		colors: {},
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: []
	} as CodeColorTheme

	for (const [vsc_id, token] of Object.entries(template.workbench)) {
		output.colors[vsc_id] = get_color(token)
	}

	for (const rule of template.tokens) {
		output.tokenColors.push({
			scope: rule.scope,
			settings: {
				fontStyle: rule.settings.fontStyle,
				foreground: rule.settings.foreground ? get_color(rule.settings.foreground) : undefined,
			}
		})
	}

	const json = JSON.stringify(output)
	await fs.writeFile(`themes/${theme.id}.json`, json)
}
