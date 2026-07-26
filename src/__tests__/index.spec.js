import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'

import config from '../index.js'

// codeFilename is what selects the per-file override, and with it the PostCSS
// syntax Stylelint parses with. Linting a SCSS or CSS-in-JS snippet without it
// silently runs the plain-CSS path and proves nothing about the override.
const lint = (code, codeFilename = 'sample.css') => stylelint.lint({ code, config, codeFilename })

const rulesOf = ({ results }) => results[0].warnings.map(warning => warning.rule)

describe('stylelint-config', () => {
  describe('plain CSS', () => {
    it('flags shorthand hex colors', async () => {
      expect(rulesOf(await lint('a {\n  color: #fff;\n}\n'))).toContain('color-hex-length')
    })

    it('passes full-length hex colors', async () => {
      expect((await lint('a {\n  color: #ffffff;\n}\n')).results[0].warnings).toHaveLength(0)
    })
  })

  describe('SCSS', () => {
    it('parses SCSS syntax', async () => {
      // A '//' comment is the assertion, not nesting or '$variable': CSS nesting
      // is standard now and the default parser reads both, so a test built on
      // them passes with the override removed. Only postcss-scss accepts '//'.
      const result = await lint('// a line comment\n$brand: #ffffff;\n\n.a {\n  color: $brand;\n}\n', 'sample.scss')

      expect(result.results[0].parseErrors).toHaveLength(0)
      expect(result.results[0].warnings).toHaveLength(0)
    })

    it('applies rules inside SCSS', async () => {
      expect(rulesOf(await lint('.a {\n  color: #fff;\n}\n', 'sample.scss'))).toContain('color-hex-length')
    })
  })

  describe('CSS-in-JS', () => {
    it('applies rules inside a tagged template', async () => {
      const styled = "import styled from 'styled-components'\n\nexport const A = styled.div`\n  color: #fff;\n`\n"

      expect(rulesOf(await lint(styled, 'sample.ts'))).toContain('color-hex-length')
    })

    it('parses the surrounding JavaScript without reporting it', async () => {
      const clean = "import styled from 'styled-components'\n\nexport const A = styled.div`\n  color: #ffffff;\n`\n"
      const result = await lint(clean, 'sample.ts')

      expect(result.results[0].parseErrors).toHaveLength(0)
      expect(result.results[0].warnings).toHaveLength(0)
    })
  })

  describe('Tailwind', () => {
    it('allows the Tailwind at-rules', async () => {
      // stylelint-config-tailwindcss exists to stop at-rule-no-unknown from
      // rejecting these. Without it the config is unusable in a Tailwind project.
      const result = await lint('@tailwind base;\n\n.a {\n  @apply p-4;\n}\n')

      expect(rulesOf(result)).not.toContain('at-rule-no-unknown')
      expect(rulesOf(result)).not.toContain('scss/at-rule-no-unknown')
    })
  })
})
