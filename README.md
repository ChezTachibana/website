## tachibana.rip

### Chez TACHIBANA ― 立花隆公式サイト

- このリポジトリには立花隆公式サイトのソースコードが含まれています
- `main` ブランチに push されるたび [GitHub Actions](https://github.com/ChezTachibana/website/actions) でサイトがビルドされます

### フォルダ構成

- `components` 各ページで利用される React コンポーネント
- `data` 各ページで利用される JSON 形式のデータ
- `deploy` サイトのビルドとデプロイ時に使われるデータ
- `images` サイトのロゴやアイコンなどの画像データ
- `pages` 各ページ（ファイル名が `link.tsx` なら `/link` でアクセスできる）
- `public` サイトの一般公開データ（書影画像など）
- `styles` サイトのスタイルシート
- `types` TypeScript の型定義

### ローカルでの開発

- Node.js v14, yarn v1.22.5 で開発しています
- Visual Studio Code などの IDE の利用をおすすめします

`git clone` したディレクトリ直下で以下のコマンドを実行すると依存ライブラリがすべてインストールされます。

```sh
yarn
```

その後、以下のコマンドを実行するとローカルに Web サーバが起動し、 http://localhost:3000 で Web サイトを閲覧できます。

```sh
yarn dev
```

さらに以下のコマンドで Web サーバでホストできる HTML, JavaScript, CSS などの静的アセットが書き出されます。すべてのアセットは `out` フォルダ内に保存されます。

```sh
yarn build
yarn export
```

---

https://github.com/ChezTachibana/website
