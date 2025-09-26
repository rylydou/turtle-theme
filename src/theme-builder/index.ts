import { Glob } from "bun";
import type { CodeColorTheme, Theme } from "./types";
import { exportTheme } from "./theme-builder";


const templates = new Map<string, CodeColorTheme>();


for await (const filePath of new Glob("input/templates/*.json").scan(".")) {
	const templateID = filePath.split("/").at(-1)!.split(".").at(-2)!;
	console.log(`Loading template ${templateID}...`);

	let text = await Bun.file(filePath).text();
	text = text.replaceAll(/,\s*([\]}])/g, '$1');
	const data: CodeColorTheme = JSON.parse(text);

	templates.set(templateID, data);
}


for await (const filePath of new Glob("input/themes/*.yml").scan(".")) {
	const themeID = filePath.split("/").at(-1)!.split(".").at(-2)!;

	console.log(`Exporting ${themeID}...`);

	const text = await Bun.file(filePath).text();
	const data = Bun.YAML.parse(text) as any;

	const theme: Theme = {
		id: themeID,
		type: "vs-dark",
		name: "Unnamed Theme",
		...data,
		template: data.template ? templates.get(data.template) : templates.values().toArray()[0],
	};

	exportTheme(theme);
}

console.log("Done!");
