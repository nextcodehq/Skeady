# Contributing / 貢献

Contributions are welcome. / 貢献を歓迎します。

## Development setup / 開発環境

Requirements / 必要な環境:

- Bun (latest)
- A stable Rust toolchain for the Tauri app / Tauri アプリ用の stable Rust toolchain

```bash
git clone https://github.com/nextcodehq/Skeady.git
cd Skeady
bun install
```

## Commands / コマンド

Run commands from the repository root. / コマンドはリポジトリのルートで実行してください。

| Command               | Description / 説明                                 |
| --------------------- | -------------------------------------------------- |
| `bun run dev`         | Start development tasks / 開発タスクを起動         |
| `bun run tauri:dev`   | Run the desktop app / デスクトップアプリを起動     |
| `bun run tauri:build` | Build the desktop app / デスクトップアプリをビルド |
| `bun run format`      | Format supported files / 対応ファイルを整形        |
| `bun run format:rust` | Format Rust code / Rust コードを整形               |
| `bun run lint`        | Run Oxlint / Oxlint を実行                         |
| `bun run check-types` | Check TypeScript types / TypeScript の型を検査     |
| `bun run check`       | Run checks and builds / 検査とビルドを実行         |

Run `bun run check` before submitting a pull request and resolve any failures.

Pull Request を提出する前に `bun run check` を実行し、失敗があれば修正してください。

## Issues / Issue

Search existing issues before opening a new one. Use the issue forms for bug reports and feature requests.

新しい Issue を作成する前に、既存の Issue を検索してください。不具合報告と機能提案には Issue フォームを使用してください。

Do not report security vulnerabilities in public issues. See [SECURITY.md](./SECURITY.md).

脆弱性を公開 Issue で報告しないでください。[SECURITY.md](./SECURITY.md) を確認してください。

## Pull requests / Pull Request

Describe the changes and include relevant validation results.

変更内容と、実施した検証の結果を記載してください。

## Commit messages / コミットメッセージ

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

[Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) に従ってください。

```text
type(scope): description
```

Use `bun run cm` for the interactive commit prompt.

対話式の入力には `bun run cm` を使用できます。

## License / ライセンス

Skeady is licensed under [GNU AGPL-3.0-or-later](./LICENSE).

Skeady は [GNU AGPL-3.0-or-later](./LICENSE) でライセンスされています。
