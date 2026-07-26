import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'

import config from '../index.js'

const lint = code => stylelint.lint({ code, config })

describe('stylelint-config', () => {
  it('flags shorthand hex colors', async () => {
    const { results } = await lint('a {\n  color: #fff;\n}\n')

    expect(results[0].warnings.map(warning => warning.rule)).toContain('color-hex-length')
  })

  it('passes full-length hex colors', async () => {
    const { results } = await lint('a {\n  color: #ffffff;\n}\n')

    expect(results[0].warnings).toHaveLength(0)
  })
})
