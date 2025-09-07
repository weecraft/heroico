import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"
import reactQuery from "@tanstack/eslint-plugin-query"

export default combine(
  ignores([".nitro/**", ".output/**", ".tanstack/**", "**/*.gen.ts"]),
  javascript(),
  imports(),
  typescript(),
  react({
    overrides: {
      "react-refresh/only-export-components": "off",
      "react/no-unstable-context-value": "off",
    },
  }),
  reactQuery.configs["flat/recommended"],
)
