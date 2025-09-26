export interface CodeColorTheme {
	$schema: "vscode://schemas/color-theme",
	colors: object;
	tokenColors: TokenColorRules[];
	semanticHighlighting?: boolean;
	semanticTokenColors?: object;
}


export interface TokenColorRules {
	name?: string;
	scope: string[];
	settings: TokenColorSettings;
}

export interface TokenColorSettings {
	fontStyle?: string;
	foreground?: string;
}
