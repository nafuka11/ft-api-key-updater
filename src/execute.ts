import { spawn } from "child_process";
import { join } from "path";

export const runExecutable = (executablePath: string, secret: string) => {
  return new Promise<void>((resolve, reject) => {
    const process = spawn(executablePath, {
      stdio: "inherit",
      env: { FT_API_SECRET: secret },
    });
    process.on("close", (code) => {
      if (code) {
        reject();
      }
      resolve();
    });
  });
};
