import type { ThemeDefinition } from '../template/colors.ts';
import { themes } from '../themes/index.ts';
import { PACKAGE_JSON } from './paths.ts';
import { label } from './theme.ts';

/**
 * VS Code stores the chosen theme by its label in `workbench.colorTheme`,
 * so labels must stay stable across releases.
 */
function contribution(theme: ThemeDefinition) {
	return {
		label: label(theme),
		uiTheme: theme.type === 'light' ? 'vs' : 'vs-dark',
		path: `./dist/${theme.id}.json`,
	};
}

/**
 * Brings `contributes.themes` in package.json in line with src/themes.
 * Returns whether the manifest was out of date. Only writes when `write` is set.
 */
export async function syncManifest({ write }: { write: boolean }): Promise<boolean> {
	const file = Bun.file(PACKAGE_JSON);
	const original = await file.text();
	const pkg = JSON.parse(original);

	pkg.contributes ??= {};
	pkg.contributes.themes = themes.map(contribution);

	const updated = JSON.stringify(pkg, null, '\t') + '\n';
	const stale = updated !== original;
	if (stale && write) await Bun.write(file, updated);
	return stale;
}
