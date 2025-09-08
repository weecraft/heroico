import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"
import reactQueryPlugin from "@tanstack/eslint-plugin-query"
import convexPlugin from "@convex-dev/eslint-plugin"

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
  reactQueryPlugin.configs["flat/recommended"],
  convexPlugin.configs.recommended,
)
