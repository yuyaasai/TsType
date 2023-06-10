# TsType

TypeScript の型の学習用のディレクトリ

## 構成

global にインストールした最新版の typescript を使う。
下記のコマンドで最新版にアップデート
`npm install -g typescript@latest`

バージョンが新しすぎてeslintが使えなかったので下記のようにして下げた
`npm install -g typescript@4.9` (4.9.5 がインストールされる)

が、なぜか eslint が最新版と判定してしまうので `npm install --save-dev typescript@4.9` を入れた。

## 環境構築

### npm init -y

TsType フォルダで `npm init -y` を実行。
適当に package.json を編集してコミットする。

### .gitignore を作成
```txt
node_modules
.vscode/*
!.vscode/extensions.json
.DS_Store
```

### TypeScriptの設定をする
`npm install --save-dev typescript@4.9` でTypeScriptをインストール (eslintのtypescript対応バージョンに合わせる)
`tsc --init` コマンドで `tsconfig.json` が作成されるので、下記の設定をする。
```json
{
  "compilerOptions": {
    "target": "es2022",
    "useDefineForClassFields": true,
    "module": "es2022",
    "moduleResolution": "Node",
    "strict": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "noEmit": true
  }
}
```

### eslint + prettier の導入

1. `npm init @eslint/config` で `.eslintrc.js` を作成。
※ `npx eslint --init` でも同じ
  - How would you like to use ESLint? => To check syntax and find problems
  - What type of modules does your project use? => JavaScript modules (import/export)
  - Which framework does your project use? => None of these
  - Does your project use TypeScript? => Yes
  - What does your code run? => Node
  - What format do you want your config file to be in? => JavaScript
  - Would you like to install them now? => Yes
2. eslint で必要なモジュールをインストール
```sh
npm install --save-dev eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-promise @vue/eslint-config-typescript @rushstack/eslint-patch
```
3. `.eslintrc.js` を `.eslintrc.cjs` に拡張子を変更して内容下記のようにする
```cjs
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")
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
    }
}
```
4. prettier で必要なモジュールをインストール
   `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
5. `tsconfig.eslint.json` のファイルを作成: typescript(eslint) の設定
```json
{
  "extends": "./tsconfig.json",
  "include": [
    "**/*.*.cjs",
    "**/*.ts",
    "**/*.vue"
  ],
  "compilerOptions": {
    "allowJs": true
  }
}
```
5. `.prettierrc.json` のファイルを作成: フォーマット設定
```json
{
    "arrowParens": "always",
    "printWidth": 100,
    "semi": false,
    "singleQuote": false,
    "tabWidth": 4,
    "trailingComma": "none"
}
```
6. `TsType.code-workspace` に vscode の自動フォーマット設定を追加
```json
{
  "folders": [
    {
      "path": "../TsType"
    }
  ],
  "settings": {
    "editor.formatOnSave": false,
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    }
  }
}
```
7. 動作確認
- `npm eslint .` でeslintが実行されるのでエラーが出なければOK
- 適当な `.ts` ファイルを作成して自動フォーマットやeslintの警告が出ることを確かめる
