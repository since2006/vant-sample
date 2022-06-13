// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:vue/essential',
        '@vue/typescript'
    ],
    rules: {
        "vue/no-unused-components": "off",
        "vue/no-v-model-argument": "off",
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
