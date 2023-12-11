import * as fs from 'fs'
import * as fsp from 'fs/promises'
import JSON5 from 'json5'

import { sort_theme } from './sort'
import { CodeColorTheme } from './types'


const THEMES_DIR = 'themes/'


for (const file_name of fs.readdirSync(THEMES_DIR)) {
	const file_path = THEMES_DIR + file_name

	fsp.readFile(file_path, { encoding: 'utf-8' }).then(async (file) => {
		let theme = JSON5.parse(file) as CodeColorTheme
		theme = await sort_theme(theme)

		const str = JSON.stringify(theme, null, '\t') + '\n'
		fsp.writeFile(file_path, str, { encoding: 'utf-8' })

		console.log(file_name)
	})
}
