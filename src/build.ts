/**
 * Builds every color theme into dist/ and syncs package.json.
 *
 *   bun run build   build dist/ and update package.json
 *   bun run check   validate only; exits non-zero on errors or a stale package.json
 */
import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { syncManifest } from './lib/manifest.ts';
import { DIST_DIR } from './lib/paths.ts';
import { buildTheme } from './lib/theme.ts';
import { themes } from './themes/index.ts';

const { values: args } = parseArgs({
	args: Bun.argv.slice(2),
	options: { check: { type: 'boolean', default: false } },
});

const start = performance.now();
const errors: string[] = [];

const ids = themes.map((t) => t.id);
for (const id of new Set(ids)) {
	if (ids.indexOf(id) !== ids.lastIndexOf(id)) errors.push(`theme id "${id}" is used more than once`);
}
const names = themes.map((t) => t.name);
for (const name of new Set(names)) {
	if (names.indexOf(name) !== names.lastIndexOf(name)) errors.push(`theme name "${name}" is used more than once`);
}

const built = themes.map((theme) => ({ theme, json: buildTheme(theme, errors) }));

if (errors.length) {
	for (const e of errors) console.error(`  \x1b[31merror\x1b[0m ${e}`);
	console.error(`\nfailed with ${errors.length} error(s)`);
	process.exit(1);
}

if (args.check) {
	if (await syncManifest({ write: false })) {
		console.error('package.json `contributes.themes` is out of date; run `bun run build`');
		process.exit(1);
	}
	console.log(`check passed (${themes.length} themes)`);
	process.exit(0);
}

await rm(DIST_DIR, { recursive: true, force: true });
await Promise.all(built.map(({ theme, json }) => Bun.write(join(DIST_DIR, `${theme.id}.json`), JSON.stringify(json))));

if (await syncManifest({ write: true })) console.log('updated package.json');
console.log(`built ${themes.length} themes into dist/ in ${Math.round(performance.now() - start)}ms`);
