import type { TokenRule } from './colors.ts';

/**
 * TextMate scope rules for syntax highlighting.
 * Use "Developer: Inspect Editor Tokens and Scopes" in VS Code to find scopes.
 */
export const tokens: TokenRule[] = [
	{
		name: 'Comment',
		scope: [
			'comment',
			'comment.block',
			'comment.block.documentation',
			'comment.line',
			'punctuation.definition.comment',
		],
		settings: { foreground: 'code.comment' },
	},
	{
		name: 'String',
		scope: ['string'],
		settings: { foreground: 'code.yellow' },
	},
	{
		name: 'Escaped String Characters',
		scope: [
			'constant.character',
			'variable.language.makefile',
		],
		settings: { foreground: 'code.pink' },
	},
	{
		name: 'Numbers and Booleans',
		scope: [
			'constant.language',
			'constant.numeric',
			'constant.other',
		],
		settings: { foreground: 'code.pink' },
	},
	{
		name: 'Variables',
		scope: [
			'constant.other.color',
			'entity.name.tag.yaml',
			'entity.name.variable',
			'meta.function-call.arguments',
			'meta.jsx.children.js.jsx',
			'meta.object.member',
			'source.css support.type.property-name',
			'source.less support.type.property-name',
			'source.postcss support.type.property-name',
			'source.sass support.type.property-name',
			'source.scss support.type.property-name',
			'source.stylus support.type.property-name',
			'support.constant.color',
			'variable',
			'variable.other.object.property',
			'meta.jsx.children',
		],
		settings: { foreground: 'editor.fg' },
	},
	{
		name: 'This Variables',
		scope: ['variable.language.this'],
		settings: { foreground: 'editor.mg', fontStyle: 'italic' },
	},
	{
		name: 'Assignment Keywords and Classes',
		scope: [
			'entity',
			'entity.name.type',
			'keyword.type',
			'meta.function',
			'support',
			'variable.other.makefile',
		],
		settings: { foreground: 'code.blue' },
	},
	{
		name: 'Functions',
		scope: [
			'entity.name.function',
			'entity.name.method',
			'entity.name.type.delegate',
			'entity.other.attribute-name.pseudo-class',
			'meta.function-call',
			'meta.selector.pseudo-class',
			'support.function',
		],
		settings: { foreground: 'code.green' },
	},
	{
		name: 'Keywords',
		scope: [
			'keyword',
			'keyword.operator.expression',
			'keyword.operator.new',
			'keyword.operator.wordlike',
			'storage.modifier',
			'storage.type',
			'storage.type.function',
			'entity.name.function.decorator',
		],
		settings: { foreground: 'code.red', fontStyle: 'italic' },
	},
	{
		name: 'Operators',
		scope: [
			'keyword.operator',
			'storage.type.function.arrow',
		],
		settings: { fontStyle: '' },
	},
	{
		name: 'Markup',
		scope: [
			'entity.name.tag',
			'meta.tag.end',
			'meta.tag.start',
			'meta.tag.structure.end',
			'meta.tag.structure.start',
			'punctuation.definition.variable.makefile',
		],
		settings: { foreground: 'code.red' },
	},
	{
		name: 'Punctuation',
		scope: [
			'keyword.operator.combinator',
			'keyword.operator.type.annotation',
			'meta.brace',
			'punctuation',
			'punctuation.definition.interpolation',
		],
		settings: { foreground: 'code.punctuation' },
	},
	{
		name: 'Lesser Punctuation',
		scope: [
			'punctuation.separator',
			'punctuation.terminator',
			'meta.function.parameters.gdscript',
			'meta.function.gdscript',
			'keyword.control.@.makefile',
		],
		settings: { foreground: 'code.punctuation.less' },
	},
	{
		name: 'JSON Key - Level 0',
		scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
		settings: { foreground: 'code.red' },
	},
	{
		name: 'JSON Key - Level 1',
		scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
		settings: { foreground: 'code.orange' },
	},
	{
		name: 'JSON Key - Level 2',
		scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
		settings: { foreground: 'code.yellow' },
	},
	{
		name: 'JSON Key - Level 3',
		scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
		settings: { foreground: 'code.green' },
	},
	{
		name: 'JSON Key - Level 4',
		scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
		settings: { foreground: 'code.blue' },
	},
	{
		name: 'JSON Key - Level 5',
		scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
		settings: { foreground: 'code.pink' },
	},
	{
		name: 'YAML Key - Level 0',
		scope: ['source.yaml meta.mapping.yaml entity.name.tag.yaml'],
		settings: { foreground: 'code.red' },
	},
	{
		name: 'YAML Key - Level 1',
		scope: ['source.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml entity.name.tag.yaml'],
		settings: { foreground: 'code.orange' },
	},
	{
		name: 'YAML Key - Level 2',
		scope: ['source.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml entity.name.tag.yaml'],
		settings: { foreground: 'code.yellow' },
	},
	{
		name: 'YAML Key - Level 3',
		scope: ['source.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml entity.name.tag.yaml'],
		settings: { foreground: 'code.green' },
	},
	{
		name: 'YAML Key - Level 4',
		scope: ['source.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml entity.name.tag.yaml'],
		settings: { foreground: 'code.blue' },
	},
	{
		name: 'YAML Key - Level 5',
		scope: ['source.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml meta.map.value.yaml meta.mapping.yaml entity.name.tag.yaml'],
		settings: { foreground: 'code.pink' },
	},
	{
		name: 'Markup - Italic',
		scope: ['markup.italic'],
		settings: { fontStyle: 'italic' },
	},
	{
		name: 'Markup - Bold',
		scope: ['markup.bold'],
		settings: { fontStyle: 'bold' },
	},
	{
		name: 'Markup - Italic and Bold',
		scope: ['markup.italic markup.bold'],
		settings: { fontStyle: 'italic bold' },
	},
	{
		name: 'Markup - Underline',
		scope: ['markup.underline'],
		settings: { fontStyle: 'underline' },
	},
	{
		name: 'Markup - Link',
		scope: [
			'markup.link',
			'markup.underline.link',
		],
		settings: { foreground: 'code.green', fontStyle: 'underline' },
	},
	{
		name: 'Markup - Code',
		scope: [
			'markup.fenced_code',
			'markup.inline.raw',
		],
		settings: { foreground: 'code.pink' },
	},
];
