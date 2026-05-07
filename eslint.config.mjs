import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([

  {
    ignores: [
      "**/node_modules/**",
      "docs/**",
      "documentation/**",
      "*.json",
      "*.md",
      "docker-compose.yml"
    ],
  },

  {
    files: ["public/**/*.js"],
    languageOptions: {
      sourceType: "module", // Utilise import/export
      globals: {
        ...globals.browser,
        Swal: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules, // On applique le recommandé ici seulement
      "no-var": "error",
      "eqeqeq": "warn",
    },
  },


  {
    files: ["server.js", "server/**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Utilise require/module.exports
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules, // On applique le recommandé ici seulement
      "no-var": "error",
      "eqeqeq": "warn",
    },
  },
]);