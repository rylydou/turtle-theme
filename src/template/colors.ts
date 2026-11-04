/**
 * The named colors every theme defines. The template (workbench.ts, tokens.ts)
 * only refers to these names, so each theme only has to fill in this list.
 */
export const COLOR_NAMES = [
	// Syntax
	'code.red',
	'code.orange',
	'code.yellow',
	'code.green',
	'code.blue',
	'code.pink',
	'code.comment',
	'code.punctuation',
	'code.punctuation.less',
	// Editor
	'editor.bg',
	'editor.bg.hover',
	'editor.fg',
	'editor.mg',
	'editor.border',
	'editor.cursor.bg',
	'editor.cursor.fg',
	'editor.find.range',
	'editor.gutter',
	'editor.gutter.active',
	'editor.peek.bg',
	'editor.selection',
	// Workbench UI
	'ui.bg',
	'ui.bg.hover',
	'ui.bg.active',
	'ui.fg',
	'ui.mg',
	'ui.mg.less',
	'ui.border',
	'ui.focus',
	'ui.drop',
	'ui.accent',
	'ui.accent.hover',
	'ui.accent.fg',
	'ui.accent.bg',
	'ui.accent.bg.hover',
	'ui.scrollbar',
	'ui.scrollbar.hover',
	'shadow',
] as const;

export type ColorName = (typeof COLOR_NAMES)[number];

/**
 * A reference to a palette color: `'code.red'`, `'code.red / 0.2'` (that color at
 * 20% opacity, like CSS `rgb(... / 0.2)`; replaces any alpha the color already has),
 * or `'transparent'`.
 */
export type ColorRef = ColorName | `${ColorName} / ${number}` | 'transparent';

export interface TokenRule {
	name?: string;
	scope: string[];
	settings: {
		foreground?: ColorRef;
		/** Any combination of `italic`, `bold`, `underline`, `strikethrough`; `''` resets. */
		fontStyle?: string;
	};
}

export interface ThemeDefinition {
	/** File name and preview image name. */
	id: string;
	/** Shown in VS Code's theme picker as "Turtle Theme - <name>". Don't rename: settings store it. */
	name: string;
	type: 'dark' | 'light';
	/** Hex colors: `#rgb`, `#rgba`, `#rrggbb`, or `#rrggbbaa`. */
	colors: Record<ColorName, string>;
}

/** Identity helper for type-checked theme files. */
export const defineTheme = (theme: ThemeDefinition) => theme;

const HEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export function isHexColor(value: string): boolean {
	return HEX.test(value);
}

/** Expands any valid hex color to lowercase `#rrggbb` or `#rrggbbaa`. */
export function normalizeHex(hex: string): string {
	if (!isHexColor(hex)) throw new Error(`invalid hex color "${hex}"`);
	const digits = hex.slice(1).toLowerCase();
	return '#' + (digits.length <= 4 ? [...digits].map((d) => d + d).join('') : digits);
}

/** Resolves a reference against a theme's colors. Throws on unknown names or bad opacity. */
export function resolveColor(ref: string, colors: Record<string, string>): string {
	if (ref === 'transparent') return '#00000000';

	const [name, opacity] = ref.split('/').map((part) => part.trim()) as [string, string?];
	const value = colors[name];
	if (value === undefined) throw new Error(`unknown color "${name}"`);
	const hex = normalizeHex(value);
	if (opacity === undefined) return hex;

	const alpha = Number(opacity);
	if (!(alpha >= 0 && alpha <= 1)) throw new Error(`opacity in "${ref}" must be between 0 and 1`);
	return hex.slice(0, 7) + Math.round(alpha * 255).toString(16).padStart(2, '0');
}
