# Contributing

Requires [Bun](https://bun.sh).

```sh
bun install
bun run build    # build every theme into dist/ (also syncs package.json)
```

Press <kbd>F5</kbd> in VS Code to open a window with the extension loaded, then
pick a theme with **Preferences: Color Theme**. Run `bun run build` again and
reload that window (**Developer: Reload Window**) to see changes.

## How themes are built

Every theme shares one template and only defines a palette of named colors.

```
src/
  template/
    colors.ts         The named colors (`code.red`, `ui.bg`, ...) and how references resolve
    workbench.ts      VS Code UI color ID → named color
    tokens.ts         Syntax highlighting rules (TextMate scopes) → named color
  themes/
    index.ts          Which themes ship, in picker order
    zughy-dark.ts     One palette per theme
    ...
  lib/                Theme generation and package.json sync
  build.ts            `bun run build` / `bun run check`
  images.ts           `bun run images` (README previews)
  release.ts          `bun run package` / `dogfood` / `publish`
dist/                 Build output (gitignored, shipped in the VSIX)
```

In the template, a color is a named color (`'code.red'`), a named color at an
opacity (`'code.red / 0.2'`), or `'transparent'`. Leave a VS Code color out
entirely to keep VS Code's default. Typos are type errors, so `bun run check`
catches them.

- **Change a color in one theme:** edit its palette in `src/themes/`.
- **Change what a UI element or syntax scope uses in every theme:** edit
  `src/template/workbench.ts` or `tokens.ts`.
- **Add a named color:** add it to `COLOR_NAMES` in `src/template/colors.ts`;
  the typecheck then lists every palette that needs a value for it.
- **Add a theme:** copy a palette in `src/themes/`, give it a new `id` and
  `name`, and add it to `src/themes/index.ts`. Then run `bun run images` and
  add its preview to the README.

Don't rename an existing theme's `name`: VS Code stores the chosen theme by its
label ("Turtle Theme - <name>"), so renaming switches users back to the default.

## Scripts

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `bun run build`   | Build all themes into `dist/` and sync `contributes.themes`     |
| `bun run check`   | Validate every theme, typecheck, verify package.json is synced  |
| `bun run images`  | Regenerate the previews in `images/themes/`                     |
| `bun run package` | Build and package `bin/turtle-theme-<version>.vsix`             |
| `bun run dogfood` | Package and install into your local VS Code                     |
| `bun run publish` | Publish to the VS Marketplace **and** Open VSX (CI only)        |

## Releasing

The extension is published as `CiberTurtle.turtle-theme` on the
[VS Marketplace](https://marketplace.visualstudio.com/items?itemName=CiberTurtle.turtle-theme)
and as `rylydou.turtle-theme` on [Open VSX](https://open-vsx.org/extension/rylydou/turtle-theme).
`bun run publish` packages a VSIX per publisher and uploads each one; publishers
are configured in `src/release.ts`.

1. Bump `version` in `package.json`, run `bun run images` (the previews show the
   version), and move the CHANGELOG's `Unreleased` notes under the new version.
2. Commit, then tag and push: `git tag v5.1.0 && git push --follow-tags`.
3. The **Release** workflow checks that the tag matches `package.json`, publishes to
   both marketplaces, and attaches the VSIX files to a GitHub release.

### Trusted publishing

Publishing uses [trusted publishing](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publish-with-github-actions-and-trusted-publishing)
(OIDC): the Release workflow's GitHub identity token is exchanged for a credential that
expires within minutes. No tokens are stored, so there are no repository secrets to set
or rotate. Because of this, `bun run publish` only works inside that workflow. Locally,
use `bun run publish --dry-run` to build both VSIX files without uploading them.

Set this up once per marketplace:

- **VS Marketplace:** go to [publisher management](https://marketplace.visualstudio.com/manage),
  open the `CiberTurtle` publisher, select **Trusted Publishing**, and create a policy:
  - Repository owner: `rylydou`
  - Repository: `turtle-theme`
  - Workflow: `release.yml`
  - Environment: leave empty
- **Open VSX:** go to [trusted publishers](https://open-vsx.org/user-settings/trusted-publishers)
  and register the same repository and workflow (`release.yml`) for `rylydou.turtle-theme`.

The policy is tied to the workflow file name, so renaming `release.yml` breaks
publishing until the policies are updated. Once both policies are in place, delete any
old `VSCE_PAT` / `OVSX_PAT` repository secrets and revoke the tokens.
