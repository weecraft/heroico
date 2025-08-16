import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"

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
)
