# ft-api-key-updater

CLI Tool to update 42 API keys.

This tool will run scripts from the rotated keys. Rotating keys must be done manually.

The script can be placed in any directory. The script name must be in the form `{applicationId}_{applicationName}`.

## Usage

1. Install packages
   ```bash
   yarn install
   ```

1. Run CLI
   ```bash
   yarn start <script-dir>
   ```

### Example of CLI result

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
