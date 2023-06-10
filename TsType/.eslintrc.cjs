/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true
    },
    extends: ["standard-with-typescript", "prettier"],
    overrides: [],
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.eslint.json",
        sourceType: "module",
        tsconfigRootDir: __dirname
    },
    rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        // interface または type の強制: 型の検証のためOFFにする
        "@typescript-eslint/consistent-type-definitions": "off",
        // 空っぽのクラス
        "@typescript-eslint/no-extraneous-class": "off",
        // 明示的な戻り値の型
        "@typescript-eslint/explicit-function-return-type": "off",
        // 大きな数値の精度ロスが無い事
        "@typescript-eslint/no-loss-of-precision": "off"
    }
}
