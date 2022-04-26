/*global module*/
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4, { "SwitchCase": 1 }],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "multiline-ternary": ["off"],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ]
    }
    // rules: {
    //     indent: ["error", 4],
    //     semi: [2, "always"],
    //     "space-before-function-paren": ["error", "never"],
    //     quotes: ["error", "double", { allowTemplateLiterals: true }]
    // }
};
