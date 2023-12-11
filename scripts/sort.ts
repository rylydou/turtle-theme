import { CodeColorTheme } from './types'


export async function sort_theme(theme: CodeColorTheme): Promise<CodeColorTheme> {
	theme.colors = sort_object_by_keys(theme.colors)

	for (const token of theme.tokenColors) {
		token.scope.sort((a, b) => a.localeCompare(b))
	}

	return theme
}


export function sort_object_by_keys(obj: object): object {
	return Object.keys(obj).sort().reduce((r, k) => (r[k] = obj[k], r), {})
}
