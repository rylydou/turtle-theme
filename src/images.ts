/**
 * Regenerates the README preview images in images/themes/, one per theme.
 *
 *   bun run images
 *
 * Each preview is drawn as an SVG and rasterized with a bundled font, so the
 * output is identical on every machine and needs no browser.
 */
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import { version } from '../package.json';
import { resolveColor, type ColorName, type ThemeDefinition } from './template/colors.ts';
import { themes } from './themes/index.ts';
import { IMAGES_DIR, ROOT } from './lib/paths.ts';

const FONT_DIR = join(ROOT, 'node_modules/dejavu-fonts-ttf/ttf');
const FONT = { family: 'DejaVu Sans Mono', size: 13, advance: 0.602 }; // advance = glyph width in em
const LINE_HEIGHT = 18;
const SCALE = 2;

/** Style of each span in the sample. Colors are palette names; `italic` styles keywords. */
const STYLES = {
	text: { color: 'editor.fg' },
	comment: { color: 'code.comment' },
	keyword: { color: 'code.red', italic: true },
	type: { color: 'code.blue' },
	func: { color: 'code.green' },
	string: { color: 'code.yellow' },
	number: { color: 'code.pink' },
	self: { color: 'editor.mg' },
	punc: { color: 'code.punctuation' },
	less: { color: 'code.punctuation.less' },
} satisfies Record<string, { color: ColorName; italic?: boolean }>;
type Style = keyof typeof STYLES;
type Line = [Style, string][];

function sample(theme: ThemeDefinition): Line[] {
	const [major, minor, patch] = version.split('.');
	const indent = (n: number): [Style, string] => ['text', '  '.repeat(n)];
	const self: Line = [['self', 'this'], ['punc', '.']];
	return [
		[['comment', '// An exceptionally useful comment']],
		[['keyword', 'export default class'], ['text', ' '], ['type', 'Theme'], ['text', ' '], ['punc', '{']],
		[indent(1), ['keyword', 'constructor'], ['punc', '() {']],
		[indent(2), ...self, ['text', 'name '], ['keyword', '='], ['text', ' '], ['punc', "'"], ['string', theme.name], ['punc', "'"], ['less', ';']],
		[indent(2), ...self, ['text', 'from '], ['keyword', '='], ['text', ' '], ['punc', "'"], ['string', 'Turtle Theme'], ['punc', "'"], ['less', ';']],
		[indent(2), ...self, ['text', 'version '], ['keyword', '='], ['text', ' '], ['punc', '['], ['number', major!], ['less', ', '], ['number', minor!], ['less', ', '], ['number', patch!], ['punc', ']'], ['less', ';']],
		[indent(1), ['punc', '}']],
		[],
		[indent(1), ['func', 'printInfo'], ['punc', '() {']],
		[indent(2), ['keyword', 'let'], ['text', ' semver '], ['keyword', '='], ['text', ' '], ...self, ['text', 'version'], ['punc', '.'], ['func', 'join'], ['punc', "('"], ['string', '.'], ['punc', "')"], ['less', ';']],
		[indent(2), ['text', 'console'], ['punc', '.'], ['func', 'log'], ['punc', '(`${'], ...self, ['text', 'name'], ['punc', '}'], ['string', ' from '], ['punc', '${'], ...self, ['text', 'from'], ['punc', '}'], ['number', '\\n\\t'], ['punc', '${'], ['text', 'semver'], ['punc', '}`)'], ['less', ';']],
		[indent(1), ['punc', '}']],
		[['punc', '}'], ['less', ';']],
	];
}

const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function preview(theme: ThemeDefinition): string {
	const color = (name: ColorName) => resolveColor(name, theme.colors);
	const lines = sample(theme);

	const charWidth = FONT.size * FONT.advance;
	const gutterChars = String(lines.length).length + 1; // "13."
	const longest = Math.max(...lines.map((line) => line.reduce((n, [, text]) => n + text.length, 0)));

	const pad = { x: 16, y: 14 };
	const gutter = gutterChars * charWidth + 12;
	const card = {
		width: Math.ceil(pad.x + gutter + longest * charWidth + pad.x),
		height: Math.ceil(pad.y * 2 + lines.length * LINE_HEIGHT),
	};
	const margin = { x: 28, y: 40 }; // room for the drop shadow
	const width = card.width + margin.x * 2;
	const height = card.height + margin.y * 2;
	const baseline = (i: number) => margin.y + pad.y + i * LINE_HEIGHT + LINE_HEIGHT * 0.72;

	const body = lines.map((line, i) => {
		const number = `<text x="${margin.x + pad.x + gutterChars * charWidth}" y="${baseline(i)}" text-anchor="end" fill="${color('editor.gutter')}">${i + 1}.</text>`;
		const spans = line
			.map(([style, text]) => {
				const s: { color: ColorName; italic?: boolean } = STYLES[style];
				return `<tspan fill="${color(s.color)}"${s.italic ? ' font-style="italic"' : ''}>${escape(text)}</tspan>`;
			})
			.join('');
		return `${number}<text x="${margin.x + pad.x + gutter}" y="${baseline(i)}" xml:space="preserve">${spans}</text>`;
	});

	return [
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="${FONT.family}" font-size="${FONT.size}">`,
		`<defs><filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.27"/></filter></defs>`,
		`<rect x="${margin.x + 0.5}" y="${margin.y + 0.5}" width="${card.width - 1}" height="${card.height - 1}" rx="12" fill="${color('editor.bg')}" stroke="${color('editor.border')}" filter="url(#shadow)"/>`,
		...body,
		`</svg>`,
	].join('\n');
}

await Promise.all(
	themes.map(async (theme) => {
		const png = new Resvg(preview(theme), {
			fitTo: { mode: 'zoom', value: SCALE },
			font: {
				loadSystemFonts: false,
				fontFiles: [join(FONT_DIR, 'DejaVuSansMono.ttf'), join(FONT_DIR, 'DejaVuSansMono-Oblique.ttf')],
				defaultFontFamily: FONT.family,
				monospaceFamily: FONT.family,
			},
		})
			.render()
			.asPng();
		await Bun.write(join(IMAGES_DIR, 'themes', `${theme.id}.png`), png);
	}),
);
console.log(`wrote ${themes.length} previews to images/themes/`);
