import { HexColor, TokenColorRules } from '.';


export interface Theme {
	type: 'vs' | 'vs-dark';
	name: string;
	id: string;
	template: ThemeTemplate;
	colors: { [key in ColorToken]: HexColor };
}


export interface ThemeTemplate {
	workbench: { [key: string]: ColorToken | `${ColorToken} / ${number}`; };
	tokens: TokenColorRules[];
}


export type ColorToken =
	| 'code.blue'
	| 'code.comment'
	| 'code.green'
	| 'code.orange'
	| 'code.pink'
	| 'code.punctuation.less'
	| 'code.punctuation'
	| 'code.red'
	| 'code.yellow'
	| 'editor.bg.hover'
	| 'editor.bg'
	| 'editor.border'
	| 'editor.cursor.bg'
	| 'editor.cursor.fg'
	| 'editor.fg'
	| 'editor.find.match.bg'
	| 'editor.find.match.border'
	| 'editor.find.range'
	| 'editor.gutter.active'
	| 'editor.gutter'
	| 'editor.mg'
	| 'editor.peek.bg'
	| 'editor.selection'
	| 'shadow'
	| 'ui.accent.bg.hover'
	| 'ui.accent.bg'
	| 'ui.accent.fg'
	| 'ui.accent.hover'
	| 'ui.accent'
	| 'ui.bg.active'
	| 'ui.bg.hover'
	| 'ui.bg.hover'
	| 'ui.bg'
	| 'ui.border'
	| 'ui.debug.bg'
	| 'ui.debug.fg'
	| 'ui.drop'
	| 'ui.fg'
	| 'ui.focus'
	| 'ui.mg.less'
	| 'ui.mg'
	| 'ui.scrollbar.hover'
	| 'ui.scrollbar'
	;
