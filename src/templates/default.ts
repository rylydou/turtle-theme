import { ThemeTemplate } from '../types'


export default {
	workbench: {
		'foreground': 'ui.fg',
		'editor.foreground': 'ui.fg',
		'focusBorder': 'ui.focus',
		'editor.background': 'editor.bg',
		'sideBar.background': 'ui.bg',
		'sideBar.foreground': 'ui.mg',
		'sideBar.border': 'ui.border',
		'activityBar.background': 'ui.bg',
		'activityBar.foreground': 'ui.fg',
		'activityBar.inactiveForeground': 'ui.mg.less',
		'activityBar.activeBorder': 'ui.accent',
		'activityBar.border': 'ui.border',
		'titleBar.activeBackground': 'ui.bg',
		'titleBar.inactiveBackground': 'ui.bg',
		'titleBar.border': 'ui.border',
		'titleBar.inactiveForeground': 'ui.mg.less',
		'titleBar.activeForeground': 'ui.mg',
		'list.activeSelectionBackground': 'ui.bg.active',
		'list.activeSelectionForeground': 'ui.fg',
		'list.activeSelectionIconForeground': 'ui.mg',
		'list.dropBackground': 'ui.drop',
		'list.hoverBackground': 'ui.bg.hover',
		'list.inactiveSelectionBackground': 'ui.bg.active',
		'list.inactiveSelectionForeground': 'ui.fg',
		'list.inactiveSelectionIconForeground': 'ui.mg',
		'editorGroup.dropBackground': 'ui.drop',
		'sideBar.dropBackground': 'ui.drop',
		'panelSection.dropBackground': 'ui.drop',
		'panel.background': 'ui.bg',
		'panel.border': 'ui.border',
		'panelTitle.activeForeground': 'ui.fg',
		'panelTitle.inactiveForeground': 'ui.mg.less',
		'tab.activeBackground': 'editor.bg',
		'tab.activeBorderTop': 'ui.accent.hover',
		'tab.activeForeground': 'ui.fg',
		'tab.activeModifiedBorder': 'code.yellow',
		'tab.border': 'ui.border',
		'tab.hoverBackground': 'ui.bg.hover',
		'tab.hoverForeground': 'ui.fg',
		'tab.inactiveBackground': 'ui.bg',
		'tab.inactiveForeground': 'ui.mg',
		'tab.lastPinnedBorder': 'ui.border',
		'tab.unfocusedActiveForeground': 'ui.mg',
		'tab.unfocusedHoverBackground': 'ui.bg.hover',
		'tab.unfocusedHoverForeground': 'ui.fg',
		'tab.unfocusedInactiveForeground': 'ui.mg.less',
		'editorGroupHeader.tabsBackground': 'ui.bg',
		'statusBar.background': 'ui.bg',
		'statusBar.border': 'ui.border',
		'statusBar.foreground': 'ui.mg',
		'statusBar.debuggingBackground': 'ui.debug.bg',
		'statusBar.debuggingForeground': 'ui.debug.fg',
		'statusBar.noFolderBackground': 'ui.accent',
		'statusBar.noFolderForeground': 'ui.accent.fg',
		'statusBarItem.hoverBackground': 'ui.bg.hover',
		'statusBarItem.hoverForeground': 'ui.fg',
		'statusBarItem.activeBackground': 'ui.bg.active',
		'button.background': 'ui.accent.bg',
		'button.foreground': 'ui.accent.fg',
		'button.hoverBackground': 'ui.accent.bg.hover',
		'button.secondaryBackground': 'editor.bg',
		'button.secondaryForeground': 'editor.fg',
		'button.secondaryHoverBackground': 'editor.bg.hover',
		'button.separator': 'editor.bg',
		'icon.foreground': 'ui.mg.less',
		'input.background': 'editor.bg',
		'input.border': 'editor.border',
		'input.foreground': 'editor.fg',
		'input.placeholderForeground': 'editor.mg',
		'inputOption.activeBackground': 'ui.accent.bg',
		'inputOption.activeBorder': 'ui.accent',
		'inputOption.activeForeground': 'ui.accent.fg',
		'inputOption.hoverBackground': 'ui.accent.bg',
		'editorLineNumber.activeForeground': 'editor.gutter.active',
		'editorLineNumber.foreground': 'editor.gutter',
		'editorWhitespace.foreground': 'editor.gutter',
		'textLink.activeForeground': 'ui.accent.hover',
		'textLink.foreground': 'ui.accent',
		'sideBarSectionHeader.background': 'ui.bg',
		'sideBarSectionHeader.border': 'ui.border',
		'badge.background': 'ui.bg.hover',
		'badge.foreground': 'ui.fg',
		'menu.background': 'editor.bg',
		'menu.border': 'editor.border',
		'menu.foreground': 'editor.fg',
		'menu.selectionBackground': 'ui.accent.bg',
		'menu.selectionForeground': 'ui.accent.fg',
		'menu.separatorBackground': 'editor.border',
		'menubar.selectionBackground': 'ui.accent.bg',
		'menubar.selectionForeground': 'ui.accent.fg',
		'commandCenter.activeBackground': 'editor.bg',
		'commandCenter.activeBorder': 'editor.border',
		'commandCenter.activeForeground': 'editor.fg',
		'commandCenter.background': 'editor.bg',
		'commandCenter.border': 'editor.bg',
		'commandCenter.debuggingBackground': 'ui.debug.bg',
		'commandCenter.inactiveBorder': 'editor.bg',
		'editorGroup.border': 'ui.bg',
		'editorSuggestWidget.background': 'editor.bg',
		'editorSuggestWidget.foreground': 'editor.fg',
		'editorSuggestWidget.border': 'editor.border',
		'editorSuggestWidgetStatus.foreground': 'editor.mg',
		'editorSuggestWidget.focusHighlightForeground': 'ui.accent.hover',
		'editorSuggestWidget.highlightForeground': 'ui.accent',
		'editorSuggestWidget.selectedBackground': 'ui.accent.bg',
		'editorSuggestWidget.selectedForeground': 'ui.accent.fg',
		'editorSuggestWidget.selectedIconForeground': 'ui.accent.fg',
		'editorBracketHighlight.foreground1': 'code.red',
		'editorBracketHighlight.foreground2': 'code.orange',
		'editorBracketHighlight.foreground3': 'code.yellow',
		'editorBracketHighlight.foreground4': 'code.green',
		'editorBracketHighlight.foreground5': 'code.blue',
		'editorBracketHighlight.foreground6': 'code.pink',
		'editorCursor.background': 'editor.cursor.bg',
		'editorCursor.foreground': 'editor.cursor.fg',
		'editorWidget.background': 'editor.bg',
		'widget.border': 'editor.border',
		'editorHoverWidget.border': 'editor.border',
		'widget.shadow': 'shadow',
		'scrollbar.shadow': 'shadow',
		'editorStickyScrollHover.background': 'editor.bg.hover',
		'terminalStickyScrollHover.background': 'ui.bg.hover',
		'terminal.foreground': 'ui.fg',
		'pickerGroup.border': 'editor.border',
		'pickerGroup.foreground': 'ui.accent',
		'quickInputTitle.background': 'editor.bg.hover',
		'errorForeground': 'code.red',
		'editorWarning.foreground': 'code.yellow',
		'editorLightBulb.foreground': 'code.yellow',
		'breadcrumb.activeSelectionForeground': 'editor.fg',
		'breadcrumb.focusForeground': 'editor.fg',
		'breadcrumb.foreground': 'editor.mg',
		'breadcrumbPicker.background': 'editor.bg',
		'debugIcon.breakpointDisabledForeground': 'editor.gutter',
		'debugIcon.breakpointForeground': 'code.red',
		'debugIcon.continueForeground': 'code.green',
		'debugIcon.disconnectForeground': 'code.red',
		'debugIcon.pauseForeground': 'code.blue',
		'debugIcon.restartForeground': 'code.green',
		'debugIcon.startForeground': 'code.green',
		'debugIcon.stepBackForeground': 'editor.fg',
		'debugIcon.stepIntoForeground': 'editor.fg',
		'debugIcon.stepOutForeground': 'editor.fg',
		'debugIcon.stepOverForeground': 'editor.fg',
		'debugIcon.stopForeground': 'code.red',
		'disabledForeground': 'ui.mg.less',
		'gitDecoration.addedResourceForeground': 'code.green',
		'gitDecoration.conflictingResourceForeground': 'code.orange',
		'gitDecoration.deletedResourceForeground': 'code.red',
		'gitDecoration.ignoredResourceForeground': 'editor.gutter',
		'gitDecoration.modifiedResourceForeground': 'code.yellow',
		'gitDecoration.renamedResourceForeground': 'code.pink',
		'gitDecoration.submoduleResourceForeground': 'editor.gutter.active',
		'gitDecoration.untrackedResourceForeground': 'code.green',
		'activityBarBadge.background': 'ui.bg.hover',
		'activityBarBadge.foreground': 'ui.fg',
		'dropdown.background': 'editor.bg',
		'dropdown.border': 'editor.border',
		'dropdown.foreground': 'editor.fg',
		'dropdown.listBackground': 'editor.bg',
		'editor.selectionBackground': 'editor.selection',
		'editor.findMatchBackground': 'editor.find.match.bg',
		'editor.findMatchBorder': 'editor.find.match.border',
		'editor.findMatchHighlightBackground': 'editor.find.match.bg',
		'editor.findRangeHighlightBackground': 'editor.find.range',
		'editor.foldBackground': 'editor.bg.hover',
		'quickInputList.focusBackground': 'ui.accent.bg',
		'quickInputList.focusForeground': 'ui.accent.fg',
		'quickInput.background': 'editor.bg',
		'quickInput.foreground': 'editor.fg',
		'quickInputList.focusIconForeground': 'ui.accent.fg',
		'editorLink.activeForeground': 'ui.accent.hover',
		'editor.lineHighlightBackground': 'ui.bg',
		'editor.rangeHighlightBackground': 'ui.bg',
		'settings.headerForeground': 'ui.fg',
		'editorBracketMatch.background': 'editor.bg.hover',
		'editorBracketMatch.border': 'code.punctuation.less',
		'settings.modifiedItemIndicator': 'ui.accent',
		'keybindingLabel.background': 'ui.bg',
		'keybindingLabel.border': 'ui.border',
		'keybindingLabel.bottomBorder': 'ui.border',
		'keybindingLabel.foreground': 'ui.fg',
		'toolbar.activeBackground': 'ui.bg.active',
		'toolbar.hoverBackground': 'ui.bg.hover',
		'editorGroupHeader.tabsBorder': 'ui.border',
		'tab.activeBorder': 'editor.bg',
	},
	tokens: [
		{
			'name': 'Comment',
			'scope': [
				'comment',
				'comment.block',
				'comment.block.documentation',
				'comment.line',
				'punctuation.definition.comment'
			],
			'settings': {
				'foreground': 'code.comment'
			}
		},
		{
			'name': 'String',
			'scope': [
				'string'
			],
			'settings': {
				'foreground': 'code.yellow'
			}
		},
		{
			'name': 'Escaped String Characters',
			'scope': [
				'constant.character'
			],
			'settings': {
				'foreground': 'code.pink'
			}
		},
		{
			'name': 'Numbers and Booleans',
			'scope': [
				'constant.language',
				'constant.numeric'
			],
			'settings': {
				'foreground': 'code.pink'
			}
		},
		{
			'name': 'Variables',
			'scope': [
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
				'variable.other.object.property'
			],
			'settings': {
				'foreground': 'editor.fg'
			}
		},
		{
			'name': 'Assignment Keywords and Classes',
			'scope': [
				'entity',
				'entity.name.type',
				'keyword.type',
				'meta.function',
				'storage.type.var',
				'support'
			],
			'settings': {
				'foreground': 'code.blue'
			}
		},
		{
			'name': 'Functions',
			'scope': [
				'entity.name.function',
				'entity.name.method',
				'entity.name.type.delegate',
				'entity.other.attribute-name.pseudo-class',
				'meta.function-call',
				'meta.selector.pseudo-class',
				'support.function'
			],
			'settings': {
				'foreground': 'code.green'
			}
		},
		{
			'name': 'Keywords',
			'scope': [
				'keyword',
				'keyword.operator.expression',
				'keyword.operator.new',
				'keyword.operator.wordlike',
				'storage.modifier',
				'storage.type',
				'storage.type.function'
			],
			'settings': {
				'foreground': 'code.red',
				'fontStyle': 'italic'
			}
		},
		{
			'name': 'Operators',
			'scope': [
				'keyword.operator',
				'storage.type.function.arrow'
			],
			'settings': {
				'fontStyle': ''
			}
		},
		{
			'name': 'Markup',
			'scope': [
				'entity.name.tag',
				'meta.tag.end',
				'meta.tag.start',
				'meta.tag.structure.end',
				'meta.tag.structure.start'
			],
			'settings': {
				'foreground': 'code.red'
			}
		},
		{
			'name': 'Punctuation',
			'scope': [
				'keyword.operator.combinator',
				'keyword.operator.type.annotation',
				'meta.brace',
				'punctuation',
				'punctuation.definition.interpolation'
			],
			'settings': {
				'foreground': 'code.punctuation'
			}
		},
		{
			'name': 'Lesser Punctuation',
			'scope': [
				'punctuation.separator',
				'punctuation.terminator'
			],
			'settings': {
				'foreground': 'code.punctuation.less'
			}
		},
		{
			'name': 'JSON Key - Level 0',
			'scope': [
				'source.json meta.structure.dictionary.json support.type.property-name.json'
			],
			'settings': {
				'foreground': 'code.red'
			}
		},
		{
			'name': 'JSON Key - Level 1',
			'scope': [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			'settings': {
				'foreground': 'code.orange'
			}
		},
		{
			'name': 'JSON Key - Level 2',
			'scope': [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			'settings': {
				'foreground': 'code.yellow'
			}
		},
		{
			'name': 'JSON Key - Level 3',
			'scope': [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			'settings': {
				'foreground': 'code.green'
			}
		},
		{
			'name': 'JSON Key - Level 4',
			'scope': [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			'settings': {
				'foreground': 'code.blue'
			}
		},
		{
			'name': 'JSON Key - Level 5',
			'scope': [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			'settings': {
				'foreground': 'code.pink'
			}
		},
		{
			'name': 'Markup - Italic',
			'scope': [
				'markup.italic'
			],
			'settings': {
				'fontStyle': 'italic'
			}
		},
		{
			'name': 'Markup - Bold',
			'scope': [
				'markup.bold'
			],
			'settings': {
				'fontStyle': 'bold'
			}
		},
		{
			'name': 'Markup - Italic and Bold',
			'scope': [
				'markup.italic markup.bold'
			],
			'settings': {
				'fontStyle': 'italic bold'
			}
		},
		{
			'name': 'Markup - Underline',
			'scope': [
				'markup.underline'
			],
			'settings': {
				'fontStyle': 'underline'
			}
		},
		{
			'name': 'Markup - Link',
			'scope': [
				'markup.link',
				'markup.underline.link'
			],
			'settings': {
				'foreground': 'code.green',
				'fontStyle': 'underline'
			}
		},
		{
			'name': 'Markup - Code',
			'scope': [
				'markup.fenced_code',
				'markup.inline.raw'
			],
			'settings': {
				'foreground': 'code.pink'
			}
		}
	],
} satisfies ThemeTemplate
