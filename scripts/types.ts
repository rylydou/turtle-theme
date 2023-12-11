export interface CodeColorTheme {
	$schema: "vscode://schemas/color-theme",
	colors: object
	semanticHighlighting: boolean
	semanticTokenColors: object
	tokenColors: TokenColorRules[]
}


export interface TokenColorRules {
	scope: string[]
	settings: TokenColorSettings
}

export interface TokenColorSettings {
	foreground: string
	fontStyle: string
}
