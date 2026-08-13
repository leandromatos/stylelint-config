/**
 * `postcss-styled-syntax` ships no type declarations and has no `@types` package, so importing it
 * under `strict` fails with TS7016. It is imported rather than named as a string because Stylelint
 * resolves a `customSyntax` string from the linted project's root; see `src/index.js`.
 *
 * Kept outside `src` on purpose: `files` in `package.json` publishes `src`, and an ambient module
 * declaration that ships to consumers would silently override whatever types the package grows.
 * Drop this file once it ships its own.
 */
declare module 'postcss-styled-syntax' {
  import type { Syntax } from 'postcss'

  export const parse: NonNullable<Syntax['parse']>
  export const stringify: NonNullable<Syntax['stringify']>
}
