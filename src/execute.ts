import { spawn } from "child_process";

export const runExecutable = (executablePath: string, secret: string) => {
  return new Promise<void>((resolve, reject) => {
    const childProcess = spawn(executablePath, {
      stdio: "inherit",
      env: { ...process.env, FT_API_SECRET: secret },
    });
    childProcess.on("close", (code) => {
      if (code) {
        reject();
      }
      resolve();
    });
  });
};
