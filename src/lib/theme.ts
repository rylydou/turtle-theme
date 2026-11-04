import { COLOR_NAMES, isHexColor, resolveColor, type ThemeDefinition } from '../template/colors.ts';
import { tokens } from '../template/tokens.ts';
import { workbench } from '../template/workbench.ts';

/** https://code.visualstudio.com/api/extension-guides/color-theme */
export interface ColorTheme {
	$schema: 'vscode://schemas/color-theme';
	name: string;
	type: 'dark' | 'light';
	semanticHighlighting: boolean;
	colors: Record<string, string>;
	tokenColors: { name?: string; scope: string[]; settings: { foreground?: string; fontStyle?: string } }[];
}

export const label = (theme: ThemeDefinition) => `Turtle Theme - ${theme.name}`;

/** Builds a VS Code color theme. Collects every problem into `errors` instead of stopping at the first. */
export function buildTheme(theme: ThemeDefinition, errors: string[]): ColorTheme {
	const where = (context: string) => `${theme.id}: ${context}`;

	for (const name of COLOR_NAMES) {
		const value = theme.colors[name];
		if (value === undefined) errors.push(where(`missing color "${name}"`));
		else if (!isHexColor(value)) errors.push(where(`"${name}" is not a hex color: "${value}"`));
	}
	for (const name of Object.keys(theme.colors)) {
		if (!(COLOR_NAMES as readonly string[]).includes(name)) errors.push(where(`unknown color "${name}"`));
	}

	const resolve = (ref: string, context: string) => {
		try {
			return resolveColor(ref, theme.colors);
		} catch (error) {
			errors.push(where(`${context}: ${(error as Error).message}`));
			return undefined;
		}
	};

	const colors: Record<string, string> = {};
	for (const [key, ref] of Object.entries(workbench)) {
		const value = resolve(ref, key);
		if (value) colors[key] = value;
	}

	const tokenColors = tokens.map((rule) => ({
		...(rule.name && { name: rule.name }),
		scope: rule.scope,
		settings: {
			...(rule.settings.foreground && { foreground: resolve(rule.settings.foreground, `token rule "${rule.name}"`) }),
			...(rule.settings.fontStyle !== undefined && { fontStyle: rule.settings.fontStyle }),
		},
	}));

	return {
		$schema: 'vscode://schemas/color-theme',
		name: label(theme),
		type: theme.type,
		semanticHighlighting: false,
		colors,
		tokenColors,
	};
}
