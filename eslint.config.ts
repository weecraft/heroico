import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"
import pluginQuery from "@tanstack/eslint-plugin-query"
import convexPlugin from "@convex-dev/eslint-plugin"

export default combine(
  ignores(["build/**", ".react-router/**"]),
  javascript(),
  imports(),
  typescript(),
  react({
    overrides: {
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
      "react-refresh/only-export-components": "off",
      "react/no-unstable-context-value": "off",
    },
  }),
  pluginQuery.configs["flat/recommended"],
  convexPlugin.configs.recommended,
)
