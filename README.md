Translations: [English(en)](README.md) [日本語(ja)](README.ja.md)

# ft-api-key-updater

CLI Tool to assist in updating API keys for [42 API](https://api.intra.42.fr/apidoc).

This tool does the following:

1. Display the Application URL.
   - You need to manually update your API key by navigating to the Application's URL.
1. Accept API key input.
   - Enter your updated API key into the CLI tool.
2. Set the API key to an environment variable and execute an arbitrary script.

### Example of CLI result

```bash
$ yarn start examples
yarn run v1.22.19
$ ts-node index.ts examples
API keys for the following applications will be updated:
  Vercel Application

✔ Can you confirm? … yes

Please visit your application page and copy the secret.
  URL: https://profile.intra.42.fr/oauth/applications/424242

✔ Input 42 API secret (Vercel Application) … ******
✨  Done: 424242_Vercel Application.sh
✨  Done in 10.40s.
```

## Requirement

- Node.js
- Yarn

## Usage

1. Install packages
   ```bash
   yarn install
   ```

1. Run CLI
   ```bash
   yarn start <script-dir>
   ```
   - `<script-dir>` is the directory containing executables to run for each of the 42 API Applications.  
     The name of executables must be `{applicationId}_{applicationName}. {extension}`.
