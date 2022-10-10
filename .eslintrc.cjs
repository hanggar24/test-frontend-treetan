module.exports = {
    env: {
      node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  
  
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-new": 0,
      "nuxt/no-cjs-in-config": "off",
      "no tabs": "off",
      "no-mixed-spaces-and-tabs": 0,
      "vue/html-closing-bracket-newline": [
        "error",
        {
          singleline: "never",
          multiline: "never",
        },
      ],
    },
  }
  