Translations: [English(en)](README.md) [日本語(ja)](README.ja.md)

# ft-api-key-updater

[42 API](https://api.intra.42.fr/apidoc) のAPIキーの更新を補助するCLIツールです。

このツールは以下のことを行います。

1. ApplicationのURL表示
   - ApplicationのURLから、ユーザがAPIキーの更新を手動で行う必要があります。
1. APIキーの入力を受付
   - ユーザが更新したAPIキーをCLIツールに入力します。
1. APIキーを環境変数にセットし、任意のスクリプトを実行

### CLI実行結果の例

```bash
$ yarn start examples
yarn run v1.22.19
$ ts-node index.ts examples
API keys for the following applications will be updated:
  Vercel Application

✔ Can you confirm? … yes

Please visit your application page and copy secret.
  URL: https://profile.intra.42.fr/oauth/applications/424242

✔ Input 42 API secret (Vercel Application) … ******
✨  Done: 424242_Vercel Application.sh
✨  Done in 10.40s.
```

## 必要物

- Node.js
- Yarn

## 使い方

1. 必要なパッケージをインストールします。

   ```bash
   yarn install
   ```

1. CLIを起動します。

   ```bash
   yarn start <script-dir>
   ```

   - `<script-dir>` には42 APIのApplicationごとに実行する実行ファイルが入ったディレクトリを指定します。  
     実行ファイルの名前は `{applicationId}_{applicationName}.{extension}` である必要があります。
